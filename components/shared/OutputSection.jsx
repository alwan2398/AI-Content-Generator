"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const OutputSection = ({ selectedContent, aiOutput }) => {
  const editorRef = useRef(null); // Initialize ref with null

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      // Access Quill editor instance
      const editor = editorRef.current.getEditor();
      editor.setText(aiOutput);
    }
  }, [aiOutput]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 space-y-2">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">{selectedContent.name}</h1>
        <Image src={selectedContent.icon} alt="icon" width={24} height={24} />
      </div>
      <p className="text-gray-300 text-sm">{selectedContent.desc}</p>
      {/* No need to pass ref directly to ReactQuill */}
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={aiOutput}
        readOnly={true}
        className="text-white h-80 rounded-lg"
        placeholder="Output will appear here..."
        aria-label="AI Output Editor"
      />
    </section>
  );
};

export default OutputSection;
