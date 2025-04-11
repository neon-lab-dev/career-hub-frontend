/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS } from "@/assets";
import Button from "@/components/Button";
import DropdownInput from "@/components/Reusable/DopdownInput/DropdownInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

type TFormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const GettingStarted = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const handleCompleteRegistration = (data: FormData) => {
    console.log("Form Data:", data);
  };
  const progress = 20;
  return (
    <div className="pt-12 bg-neutral-450 min-h-screen h-full font-plus-jakarta-sans">
      <div className="bg-white border border-neutral-100 rounded-3xl p-9 wrapper ">
        <div className="max-w-[900px] w-full mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-5">
            <Image
              src={ICONS.leftArrow}
              alt="left arrow icon"
              className="size-10"
            />
            <div className="w-full bg-neutral-50 rounded-full h-[14px]">
              <div
                className="bg-primary-500 h-[14px] rounded-[100px] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleCompleteRegistration)}
            className="max-w-[560px] mx-auto"
          >
            <div className="flex flex-col gap-5 mt-12">
              <h1 className="text-secondary-800 text-[28px] font-700 mb-4">
                Let's get started
              </h1>
              <TextInput
                label="Full Name"
                placeholder="John Smith"
                error={errors.fullName}
                {...register("fullName", {
                  required: "Full Name is required",
                })}
              />
              <TextInput
                label="Date of Birth"
                type="date"
                error={errors.fullName}
                {...register("fullName", {
                  required: "Date of Birth is required",
                })}
              />
              <div className="flex items-center gap-5">
                <TextInput
                  label="Guardian Name"
                  placeholder="Smith John"
                  error={errors.fullName}
                  {...register("fullName", {
                    required: "Guardian Name is required",
                  })}
                />
                <TextInput
                  label="Guardian Phone Number"
                  placeholder="+91 9737328323"
                  type="number"
                  error={errors.fullName}
                  {...register("fullName", {
                    required: "Guardian Phone Number is required",
                  })}
                />
              </div>
              <DropdownInput
                label="Occupation"
                {...register(`fullName`)}
                error={errors.fullName}
                options={["Teacher", "Engineer", "Other"]}
                // onChange={(e: ChangeEvent<HTMLSelectElement>) => handleBankInfoChange(e, "accType")}
              />
            </div>

            <div className="flex items-center gap-3 justify-end mt-5">
              <Button variant="natural" className=" px-6 py-[14px]">
                Skip
              </Button>
              <Button variant="normal" className="px-6 py-[14px]">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
