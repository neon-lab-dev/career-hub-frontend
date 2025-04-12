/* eslint-disable react/no-unescaped-entities */
"use client";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type TCurrentlyLookingForFormProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors;
  }
const Address:React.FC<TCurrentlyLookingForFormProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">
      Where do you live currently?
      </h1>
      <TextInput
        label="Street Address"
        placeholder="ex: new york, USA"
        error={errors.street}
        {...register("street")}
        isRequired={false}
      />
      <div className="flex items-center gap-5">
        <TextInput
          label="City"
          placeholder="ex: new york"
          error={errors.city}
          {...register("city")}
          isRequired={false}
        />
        <TextInput
          label="Post/ZIP Code"
          placeholder="ex: 35012"
          error={errors.postalCode}
          {...register("postalCode")}
          isRequired={false}
        />
      </div>
      <div className="flex items-center gap-5">
        <TextInput
          label="State"
          placeholder="ex: new york"
          error={errors.state}
          {...register("state")}
          isRequired={false}
        />
        <TextInput
          label="Country"
          placeholder="ex: America"
          error={errors.country}
          {...register("country")}
          isRequired={false}
        />
      </div>
    </div>
  );
};

export default Address;
