/* eslint-disable react/no-unescaped-entities */
"use client";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TPersonalInfoFormProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors;
  }
const PersonalInfoForm:React.FC<TPersonalInfoFormProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">
        Let's get started
      </h1>
      <TextInput
        label="Full Name"
        placeholder="John Smith"
        error={errors.full_name}
        {...register("full_name")}
        isRequired={false}
      />
      <TextInput
        label="Date of Birth"
        type="date"
        error={errors.dob}
        {...register("dob")}
        isRequired={false}
      />
      <div className="flex items-center gap-5">
        <TextInput
          label="Guardian Name"
          placeholder="Smith John"
          error={errors.guardianName}
          {...register("guardianName")}
          isRequired={false}
        />
        <TextInput
          label="Guardian Phone Number"
          placeholder="+91 9737328323"
          type="number"
          error={errors.phoneNumber}
          {...register("phoneNumber")}
          isRequired={false}
        />
      </div>
      <DropdownInput
        label="Occupation"
        {...register("occupation")}
        error={errors.occupation}
        options={["Teacher", "Engineer", "Other"]}
        isRequired={false}
      />
    </div>
  );
};

export default PersonalInfoForm;
