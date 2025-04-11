"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import DropdownInput from "../DopdownInput/DropdownInput";
import Button from "@/components/Button";

type TRegistrationFormModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const RegistrationFormModal: React.FC<TRegistrationFormModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  register,
  errors,
}) => {
  const [selectedDesignation, setSelectedDesignation] = useState<string>("Medical");
  const designationTypes = ["Medical", "Paramedical", "Paramedical Diploma", "Other"]
  const medicalCourses = [
    "Ayurvedic Medicine and Surgery",
    "Dental Surgery",
    "Medicine and Bachelor of Surgery",
    "Naturopathy and Yoga Sciences",
    "Siddha Medicine and Surgery",
    "Unani Medicine and Surgery",
  ];

  const paramedicalCourses = [
    "Anaesthesia Technology",
    "Audiology and Speech Therapy",
    "Biomedical Engineering",
    "Biotechnology",
    "Cardiac or Cardiovascular Technology",
    "Dialysis Technology",
    "Healthcare Management",
    "Medical Laboratory Technology",
    "Medical Record Technology",
    "Microbiology",
    "Nursing and Midwifery",
    "Nutrition and Dietetics",
    "Occupational Therapy",
    "Operation Theater Technology",
    "Ophthalmic Technology",
    "Optometry",
    "Physiotherapy",
    "Psychology",
    "Radiography and Medical Imaging",
    "Respiratory Therapy",
    "X-Ray Technology",
  ];

  const paramedicalDiplomaCourses = [
    "Anaesthesia Technology",
    "Dialysis Technology",
    "ECG Technology",
    "Hearing Language and Speech",
    "Medical Laboratory Technology",
    "Medical Record Technology",
    "Nursing Care Assistance",
    "Operation Theatre Technology",
    "Ophthalmic Technology",
    "Physiotherapy",
    "Radiography and Medical Imaging",
    "Sanitary Inspection",
    "X-Ray Technology",
  ];

  const options = selectedDesignation === "Medical" ?
  medicalCourses
  :
  selectedDesignation === "Paramedical" ?
  paramedicalCourses
  :
  selectedDesignation === "Paramedical Diploma" ?
  paramedicalDiplomaCourses
  :
  []

  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] flex items-center justify-center transition-all duration-300 font-plus-jakarta-sans`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } max-w-[673px] w-full bg-white rounded-[28px] p-8 transition-all duration-300`}
      >
        <div className="w-full flex items-center justify-between">
          <h1 className="text-neutral-700 font-500">Designation</h1>
          <Image
            src={IMAGES.close}
            alt="cross-icon"
            className="p-2 size-10 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <div className="w-full flex justify-center flex-col mt-3">
          {/* Radio inputs */}
          <div className="flex items-center gap-6">
            {designationTypes?.map((designation) => (
              <button
                key={designation}
                type="button"
                onClick={() => setSelectedDesignation(designation)}
                className="flex items-center gap-1 cursor-pointer"
              >
                {selectedDesignation === designation ? (
                  <Image
                    src={ICONS.radioButtonChecked}
                    alt="radio-icon"
                    className="size-5"
                  />
                ) : (
                  <Image
                    src={ICONS.radioButtonUnchecked}
                    alt="radio-icon"
                    className="size-5"
                  />
                )}
                <h1
                  className={`${
                    selectedDesignation === designation
                      ? "text-neutral-900"
                      : "text-neutral-500"
                  } font-500`}
                >
                  {designation}
                </h1>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <TextInput
              label="Institute Name"
              placeholder="eg.,  Meenakshi college of engineering"
              error={errors.fullName}
              {...register("fullName")}
              isRequired={false}
            />
            <TextInput
              label="City & State"
              placeholder="eg., Mumbai"
              error={errors.fullName}
              {...register("fullName")}
              isRequired={false}
            />
            {
              selectedDesignation !== "Other" ?
              <DropdownInput
              label="Course"
              {...register("occupation")}
              error={errors.occupation}
              options={options}
              isRequired={false}
            />
            :
            <TextInput
              label="Course"
              placeholder="ex: Full stack web development"
              error={errors.fullName}
              {...register("fullName")}
              isRequired={false}
            />
            }
            <TextInput
              label="Grade / Percentage"
              placeholder="eg., 3.85/4"
              error={errors.fullName}
              {...register("fullName")}
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
          <div className="flex items-center gap-3 mt-6">
            <Button variant="natural" className="px-6 py-3">
              Cancel
            </Button>
            <Button type="submit" variant="normal" className="px-6 py-3">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormModal;
