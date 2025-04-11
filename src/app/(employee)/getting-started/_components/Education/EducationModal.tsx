"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import TextInput from "../../../../../components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import DropdownInput from "../../../../../components/Reusable/DopdownInput/DropdownInput";
import Button from "@/components/Button";
import Modal from "../../../../../components/Reusable/Modal/Modal";

type TEducationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const EducationModal: React.FC<TEducationModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  register,
  errors,
}) => {
  const [selectedDesignation, setSelectedDesignation] =
    useState<string>("Medical");
  const designationTypes = [
    "Medical",
    "Paramedical",
    "Paramedical Diploma",
    "Other",
  ];
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

  const options =
    selectedDesignation === "Medical"
      ? medicalCourses
      : selectedDesignation === "Paramedical"
      ? paramedicalCourses
      : selectedDesignation === "Paramedical Diploma"
      ? paramedicalDiplomaCourses
      : [];

  return (
    <Modal
      heading="Designation"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
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
        {selectedDesignation !== "Other" ? (
          <DropdownInput
            label="Course"
            {...register("occupation")}
            error={errors.occupation}
            options={options}
            isRequired={false}
          />
        ) : (
          <TextInput
            label="Course"
            placeholder="ex: Full stack web development"
            error={errors.fullName}
            {...register("fullName")}
            isRequired={false}
          />
        )}
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
    </Modal>
  );
};

export default EducationModal;
