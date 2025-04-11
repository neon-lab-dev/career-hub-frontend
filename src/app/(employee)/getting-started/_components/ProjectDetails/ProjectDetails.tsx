import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ProjectDetailsModal from "./ProjectDetailsModal";

type TProjectDetailsProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const ProjectDetails: React.FC<TProjectDetailsProps> = ({
  register,
  errors,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">Project Details</h1>
      {/* Project details card */}
      <div className="p-5 rounded-2xl bg-white border focus:outline-none focus:border-primary-500 transition duration-300 border-neutral-300 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-secondary-930 text-lg font-900">Project Title</h1>
          <div className="flex items-center gap-5">
            <Image
              src={ICONS.penResume}
              alt="pen-icon"
              className="size-5 cursor-pointer"
            />
            <Image
              src={IMAGES.bin}
              alt="trash-bin-icon"
              className="size-5 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral-500 hover:underline"
          >
            Project Link
          </a>
          <p className="text-neutral-500">Project Completion Date</p>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        type="button"
        className="flex items-center gap-[6px] text-primary-500 font-600 cursor-pointer"
      >
        Add Details
        <Image
          src={ICONS.addCircle}
          alt="pen-icon"
          className="size-5 cursor-pointer"
        />
      </button>

      <ProjectDetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default ProjectDetails;
