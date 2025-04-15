/* eslint-disable react/no-unescaped-entities */
"use client";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { FieldErrors, FieldError,  UseFormRegister } from "react-hook-form";

type AddressErrors = {
  address?: {
    street?: FieldError;
    city?: FieldError;
    postalCode?: FieldError;
    state?: FieldError;
    country?: FieldError;
  };
};

type TCurrentlyLookingForFormProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors & AddressErrors;
};
const Address:React.FC<TCurrentlyLookingForFormProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">
      Where do you live currently?
      </h1>
      <TextInput
        label="Street Address"
        placeholder="ex: new york, USA"
        error={errors.address?.street}
        {...register("address.street", {required : "Street address is required"})}
        isRequired={false}
      />
      <div className="flex items-center gap-5">
        <TextInput
          label="City"
          placeholder="ex: new york"
          error={errors.address?.city}
          {...register("address.city", {required : "City is required"})}
          isRequired={false}
        />
        <TextInput
          label="Post/ZIP Code"
          placeholder="ex: 35012"
          error={errors.address?.postalCode}
          {...register("address.postalCode", {required : "Post code is required"})}
          isRequired={false}
        />
      </div>
      <div className="flex items-center gap-5">
        <TextInput
          label="State"
          placeholder="ex: new york"
          error={errors.address?.state}
          {...register("address.state" , {required : "State is required"})}
          isRequired={false}
        />
        <TextInput
          label="Country"
          placeholder="ex: America"
          error={errors.address?.country}
          {...register("address.country", {required : "Country is required"})}
          isRequired={false}
        />
      </div>
    </div>
  );
};

export default Address;
