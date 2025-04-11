"use client";

import { ICONS } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PersonalInfoForm from "./_components/PersonalInfoForm";
import LanguagePreference from "./_components/LanguagePreference";
import AreaOfInterests from "./_components/AreaOfInterests";
import CurrentlyLookingFor from "./_components/CurrentlyLookingFor";
import Address from "./_components/Address";

type TFormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const TOTAL_STEPS = 12;

const GettingStarted = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const [step, setStep] = useState<number>(1);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedCurrentlyLookingFor, setSelectedCurrentlyLookingFor] =
    useState<string[]>([]);

  const handleCompleteRegistration = (data: TFormData) => {
    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Final Submit:", data);
      // You can handle final submission here
    }
  };

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="pt-12 bg-neutral-450 min-h-screen h-full font-plus-jakarta-sans">
      <div className="bg-white border border-neutral-100 rounded-3xl p-9 wrapper min-h-screen h-full">
        <div className="max-w-[900px] w-full mx-auto">
          {/* Progress bar with percentage */}
          <div className="flex items-center gap-5">
            <Image
              src={ICONS.leftArrow}
              alt="left arrow icon"
              className="size-10 cursor-pointer"
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                }
              }}
            />
            <div className="w-full bg-neutral-50 rounded-full h-[14px] relative">
              <div
                className="bg-primary-500 h-[14px] rounded-[100px] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
              <span className="absolute right-2 -top-8 text-sm font-medium text-primary-500">
                {progress}%
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleCompleteRegistration)}
            className="max-w-[560px] mx-auto"
          >
            {step == 1 && (
              <PersonalInfoForm register={register} errors={errors} />
            )}
            {step == 2 && (
              <LanguagePreference
                selectedLanguages={selectedLanguages}
                setSelectedLanguages={setSelectedLanguages}
              />
            )}
            {step == 3 && (
              <AreaOfInterests
                selectedInterest={selectedInterest}
                setSelectedInterest={setSelectedInterest}
              />
            )}
            {step == 4 && (
              <CurrentlyLookingFor
                selectedCurrentlyLookingFor={selectedCurrentlyLookingFor}
                setSelectedCurrentlyLookingFor={setSelectedCurrentlyLookingFor}
              />
            )}
            {step == 5 && <Address register={register} errors={errors} />}

            <div className="flex items-center gap-3 justify-end mt-5">
              <Button variant="natural" className="px-6 py-[14px]">
                Skip
              </Button>
              <Button type="submit" variant="normal" className="px-6 py-[14px]">
                {step === TOTAL_STEPS ? "Submit" : "Continue"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
