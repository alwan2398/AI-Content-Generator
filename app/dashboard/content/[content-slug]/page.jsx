"use client";

import FormSection from "@/components/shared/FormSection";
import OutputSection from "@/components/shared/OutputSection";
import { chatSession } from "@/lib/AIModel";
import { content } from "@/lib/content";
import { db } from "@/lib/db"; // Ensure this is configured correctly
import { AIOutput } from "@/lib/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useState } from "react";

const CreateContent = (props) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");
  const user = useUser();

  // Find the selected content based on the slug passed via props
  const selectedContent = content.find(
    (content) => content.slug === props.params["content-slug"]
  );

  const generateAIContent = async (formData) => {
    setLoading(true);
    try {
      const selectedPrompt = selectedContent?.aiPrompt;
      const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;

      // Send the message to your AI model
      const result = await chatSession.sendMessage(finalAIPrompt);
      const aiResponseText = await result.response.text();

      // Set AI output in the state
      setAiOutput(aiResponseText);

      // Save data in the database
      await saveInDb(formData, selectedContent?.slug, aiResponseText);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveInDb = async (formData, slug, aiResp) => {
    try {
      // Insert into your Drizzle ORM table
      const result = await db.insert(AIOutput).values({
        formData: JSON.stringify(formData),
        contentSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.user?.emailAddresses[0]?.emailAddress || "unknown", // Fallback in case no email is available
        createdAt: moment().format("YYYY-MM-DD"),
      });

      console.log("Data saved:", result);
    } catch (error) {
      console.error("Error saving data to DB:", error);
    }
  };

  return (
    <div>
      <OutputSection selectedContent={selectedContent} aiOutput={aiOutput} />
      <FormSection
        selectedContent={selectedContent}
        userFormInput={(v) => generateAIContent(v)}
        loading={loading}
      />
    </div>
  );
};

export default CreateContent;
