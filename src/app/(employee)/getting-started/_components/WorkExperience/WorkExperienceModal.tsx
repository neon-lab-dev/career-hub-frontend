import Button from "@/components/Button";
import Chip from "@/components/Chip";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import Modal from "@/components/Reusable/Modal/Modal";
import TextArea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useState, KeyboardEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TWorkExperienceModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const WorkExperienceModal: React.FC<TWorkExperienceModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  register,
  errors,
}) => {
  const workTypes = ["Full Time", "Part Time", "Internship"];
  const [inputValue, setInputValue] = useState("");
  const [projectLinks, setProjectLinks] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!projectLinks.includes(inputValue.trim())) {
        setProjectLinks((prev) => [...prev, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveLink = (link: string) => {
    setProjectLinks((prev) => prev.filter((l) => l !== link));
  };
  return (
    <Modal
      heading="Add Your Work Experience"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      <div className="flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            label="Company Name"
            placeholder="eg.,  MITRA Consultancy"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
          <DropdownInput
            label="Work Type"
            {...register("occupation")}
            error={errors.occupation}
            options={workTypes}
            isRequired={false}
          />
          <TextInput
            label="From"
            type="date"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
          <TextInput
            label="To"
            type="date"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
        </div>
        <TextInput
          label="Company Location"
          placeholder="ex: New York, America"
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        <TextArea
          label="Work Description"
          placeholder="What was the project assigned? What was your contribution to the project? What are the some important features of the project."
          cols={2}
          rows={4}
          error={errors.fullName}
          {...register("fullName")}
          isRequired={false}
        />
        <div>
          <TextInput
            name="Project Links"
            label="Project Links"
            placeholder="Add link here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            error={errors.fullName}
            isRequired={false}
          />
          <p className="text-neutral-700 font-500 text-[15px] mt-[6px]">
            Press Enter to add new link*
          </p>
        </div>

        {/* Show projectLinks */}
        {projectLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {projectLinks.map((link) => (
              <Chip
                key={link}
                onClick={() => handleRemoveLink(link)}
                variant="close"
              >
                {link}
              </Chip>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Button variant="natural" className="px-6 py-3">
          Cancel
        </Button>
        <Button type="submit" variant="normal" className="px-6 py-3">
          Add
        </Button>
      </div>
    </Modal>
  );
};

export default WorkExperienceModal;
