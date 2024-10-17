"use client";

import { Loader } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FormSection = ({ selectedContent, userFormInput, loading }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <section className="mx-auto max-w-6xl px-4 w-full mt-14">
      <div>
        <form
          className="w-full md:flex flex-1 space-y-4 md:space-y-0 items-center gap-2"
          onSubmit={onSubmit}
        >
          {selectedContent.form?.map((field, index) => (
            <div key={`${field.name}-${index}`} className="w-full">
              <Input
                required={field.required}
                name={field.name}
                label={field.label}
                placeholder={field.label}
                onChange={handleChange}
                className="bg-transparent outline-none text-white rounded-lg p-2"
              />
            </div>
          ))}
          <Button
            type="submit"
            className="bg-gradient-to-br from-purple-500 to-purple-700"
            disabled={loading}
          >
            {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Generate"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
