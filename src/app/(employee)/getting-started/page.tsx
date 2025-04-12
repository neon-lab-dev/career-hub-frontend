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
import Education from "./_components/Education/Education";
import ProjectDetails from "./_components/ProjectDetails/ProjectDetails";
import WorkExperience from "./_components/WorkExperience/WorkExperience";
import Certifications from "./_components/Certifications/Certifications";
import Skills from "./_components/Skills";
import ResumeUpload from "./_components/ResumeUpload/ResumeUpload";
import SuccessTab from "./_components/SuccessTab";
import SocialLink from "./_components/SocialLink";

// Types
type TPersonalInfo = {
  full_name: string;
  dob: string;
  guardian: {
    guardianName: string;
    phoneNumber: string;
    occupation: string;
  };
};

type TAddress = {
  street: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
};

export type TEducationDetails = {
  institutionName: string;
  city: string;
  courseName: string;
  grade: string;
  startDate: string;
  endDate: string;
  designationType: string;
};

export type TProjectDetails = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
};

export type TCertificateDetails = {
  name: string;
  issuingOrganization: string;
  issueDate: Date;
  credentialID: string;
  credentialURL: string;
};

export type TWorkExperience = {
  designation: string;
  companyName: string;
  workType: string;
  startDate: string;
  endDate: string;
  description: string;
  companyLocation: string;
  projectLinks: string[];
};

type TSocialLinks = {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  youtube?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  stackoverflow?: string;
  reddit?: string;
  tiktok?: string;
  snapchat?: string;
  pinterest?: string;
  telegram?: string;
  discord?: string;
};

type TFormValues = {
  personalInfo: TPersonalInfo;
  address: TAddress;
  education: TEducationDetails[];
  projects: TProjectDetails[];
  workExperience: TWorkExperience[];
  certifications: TCertificateDetails[];
  socialLinks: TSocialLinks;
  skills: string[];
  languages: string[];
  areasOfInterests: string[];
  currentlyLookingFor: string[];
  resume: File | null;
};

const TOTAL_STEPS = 13;

const GettingStarted = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>();

  const [step, setStep] = useState<number>(1);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedCurrentlyLookingFor, setSelectedCurrentlyLookingFor] =
    useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<
    TEducationDetails[]
  >([]);
  console.log(selectedEducation);
  const [selectedProject, setSelectedProject] = useState<TProjectDetails[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<
    TProjectDetails[]
  >([]);
  const [selectedCertificate, setSelectedCertificate] = useState<
    TCertificateDetails[]
  >([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSocialLinks, setSelectedSocialLinks] = useState<
    TSocialLinks[]
  >([]);
  const [selectedResume, setSelectedResume] = useState<File | null>(null);

  const handleCompleteRegistration = (data: TFormValues) => {
    const formData = {
      full_name: data.full_name,
      dob: data.dob,
      guardian: {
        guardianName: data.guardianName,
        phoneNumber: data.phoneNumber,
        occupation: data.occupation,
      },
      address: {
        street: data.street,
        city: data.city,
        postalCode: data.postalCode,
        state: data.state,
        country: data.country,
      },
      education: selectedEducation, // From state
      projects: selectedProject, // From state
      workExperience: selectedExperience, // From state
      certifications: selectedCertificate, // From state
      socialLinks: selectedSocialLinks, // From state
      skills: selectedSkills, // From state
      languages: selectedLanguages, // From state
      areasOfInterests: selectedInterest, // From state
      currentlyLookingFor: selectedCurrentlyLookingFor, // From state
      resume: selectedResume, // From state
    };

    console.log(formData); // You can pass this `formData` to your backend here.

    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Final Submit:", formData);
      // Submit data to backend
    }
  };

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="pt-12 bg-neutral-450 min-h-screen h-full font-plus-jakarta-sans">
      <div className="bg-white border border-neutral-100 rounded-3xl p-9 wrapper min-h-screen h-full">
        <div className="max-w-[900px] w-full mx-auto">
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
            {step === 1 && (
              <PersonalInfoForm register={register} errors={errors} />
            )}
            {step === 2 && (
              <LanguagePreference onChange={setSelectedLanguages} />
            )}
            {step === 3 && <AreaOfInterests onChange={setSelectedInterest} />}
            {step === 4 && (
              <CurrentlyLookingFor onChange={setSelectedCurrentlyLookingFor} />
            )}
            {step === 5 && <Address register={register} errors={errors} />}
            {step === 6 && <Education onChange={setSelectedEducation} />}
            {step === 7 && <ProjectDetails onChange={setSelectedProject} />}
            {step === 8 && <WorkExperience onChange={setSelectedExperience}/> }
            {step === 9 && (
              <Certifications
                onChange={setSelectedCertificate}
              />
            )}
            {step === 10 && (
              <Skills onChange={(skills) => setValue("skills", skills)} />
            )}
            {step === 11 && (
              <SocialLink
                onChange={(links) => setValue("socialLinks", links)}
              />
            )}
            {step === 12 && (
              <ResumeUpload onChange={(file) => setValue("resume", file)} />
            )}
            {step === 13 && <SuccessTab />}

            {step !== 13 && (
              <div className="flex items-center gap-3 justify-end mt-5">
                <Button variant="natural" className="px-6 py-[14px]">
                  Skip
                </Button>
                <Button
                  type="submit"
                  variant="normal"
                  className="px-6 py-[14px]"
                >
                  {step === TOTAL_STEPS ? "Submit" : "Continue"}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
