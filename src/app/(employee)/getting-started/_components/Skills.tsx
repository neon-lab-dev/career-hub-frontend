"use client";
import { useState, KeyboardEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Chip from "@/components/Chip";

type TSkillsProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const Skills: React.FC<TSkillsProps> = ({ register, errors }) => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!skills.includes(inputValue.trim())) {
        setSkills((prev) => [...prev, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">Skills</h1>
      <div>
        <TextInput
          name="skills"
          label="Enter your skills"
          placeholder="eg., Design, Adobe, Figma, etc."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          error={errors.fullName}
          isRequired={false}
        />
        <p className="text-neutral-700 font-500 text-[15px] mt-[6px]">
          Press Enter to add new skill*
        </p>

        {/* Show skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <Chip
                key={skill}
                onClick={() => handleRemoveSkill(skill)}
                variant="close"
              >
                {skill}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
