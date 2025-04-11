/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import EducationModal from "./EducationModal";

type TCurrentlyLookingForFormProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const Education: React.FC<TCurrentlyLookingForFormProps> = ({
  register,
  errors,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">Education</h1>
      {/* Education card */}
      <div className="p-5 rounded-2xl bg-white border focus:outline-none focus:border-primary-500 transition duration-300 border-neutral-300 flex items-center justify-between">
        <div>
          <h1 className="text-neutral-900 text-lg font-500">Institute Name</h1>
          <p className="text-neutral-500 mt-2">Degree Name | GPA/CGPA/Grade</p>
          <p className="text-neutral-500">Start Date- End Date</p>
        </div>

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

      <button onClick={() => setIsModalOpen(!isModalOpen)} type="button" className="flex items-center gap-[6px] text-primary-500 font-600 cursor-pointer">
        Add Details
        <Image
            src={ICONS.addCircle}
            alt="pen-icon"
            className="size-5 cursor-pointer"
          />
      </button>

      <EducationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} register={register} errors={errors}  />
    </div>
  );
};

export default Education;
