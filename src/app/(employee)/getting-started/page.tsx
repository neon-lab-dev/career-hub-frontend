"use client";

import { ICONS } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
import { toast } from "sonner";

// Types

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
  issueDate: string;
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
  full_name: string;
  dob: string;
  guardian: {
    guardianName: string;
    phoneNumber: string;
    occupation: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
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
  } = useForm<TFormValues>({
    defaultValues: {
      address: {
        street: "",
        city: "",
        postalCode: "",
        state: "",
        country: "",
      },
      full_name: "",
      dob: "",
      guardian: {
        guardianName: "",
        phoneNumber: "",
        occupation: "",
      },
    },
  });

  const { mutate: updateUserDetails } = useUpdateUserDetails();

  const [step, setStep] = useState<number>(1);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedCurrentlyLookingFor, setSelectedCurrentlyLookingFor] =
    useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<
    TEducationDetails[]
  >([]);
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
  useEffect(() => {
    console.log("Updated resume:", selectedResume);
  }, [selectedResume]);

  const [skippedSteps, setSkippedSteps] = useState<number[]>([]);

  const handleCompleteRegistration = (data: TFormValues) => {
    if (
      step === 2 &&
      !skippedSteps.includes(2) &&
      selectedLanguages.length < 1
    ) {
      toast.error("Please add your preferred language");
      return;
    }
    if (
      step === 3 &&
      !skippedSteps.includes(3) &&
      selectedInterest.length < 1
    ) {
      toast.error("Please add your interest");
      return;
    }
    if (
      step === 4 &&
      !skippedSteps.includes(4) &&
      selectedCurrentlyLookingFor.length < 1
    ) {
      toast.error("Please add your current goals");
      return;
    }
    if (
      step === 6 &&
      !skippedSteps.includes(6) &&
      selectedEducation.length < 1
    ) {
      toast.error("Please add your educational details");
      return;
    }
    if (step === 7 && !skippedSteps.includes(7) && selectedProject.length < 1) {
      toast.error("Please add your project details");
      return;
    }
    if (
      step === 8 &&
      !skippedSteps.includes(8) &&
      selectedExperience.length < 1
    ) {
      toast.error("Please add your working experience if you have any");
      return;
    }
    if (
      step === 9 &&
      !skippedSteps.includes(9) &&
      selectedCertificate.length < 1
    ) {
      toast.error("Please add your certificates");
      return;
    }
    if (
      step === 10 &&
      !skippedSteps.includes(10) &&
      selectedSkills.length < 1
    ) {
      toast.error("Please add your skills");
      return;
    }
    if (
      step === 11 &&
      !skippedSteps.includes(11) &&
      selectedSocialLinks.length < 1
    ) {
      toast.error("Please add your social links");
      return;
    }
    if (step === 12 && !skippedSteps.includes(12) && !selectedResume) {
      toast.error("Please upload your resume");
      return;
    }

    // If current step is not final, just go to the next step
    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      // Final step: validate everything before submit
      if (!skippedSteps.includes(2) && selectedLanguages.length < 1) {
        toast.error("Please add your preferred language");
        return;
      }
      if (!skippedSteps.includes(3) && selectedInterest.length < 1) {
        toast.error("Please add your interest");
        return;
      }
      if (!skippedSteps.includes(4) && selectedCurrentlyLookingFor.length < 1) {
        toast.error("Please add your current goals");
        return;
      }
      if (!skippedSteps.includes(6) && selectedEducation.length < 1) {
        toast.error("Please add your educational details");
        return;
      }
      if (!skippedSteps.includes(7) && selectedProject.length < 1) {
        toast.error("Please add your project details");
        return;
      }
      if (!skippedSteps.includes(8) && selectedExperience.length < 1) {
        toast.error("Please add your working experience if you have any");
        return;
      }
      if (!skippedSteps.includes(9) && selectedCertificate.length < 1) {
        toast.error("Please add your certificates");
        return;
      }
      if (!skippedSteps.includes(10) && selectedSkills.length < 1) {
        toast.error("Please add your skills");
        return;
      }
      if (!skippedSteps.includes(11) && selectedSocialLinks.length < 1) {
        toast.error("Please add your social links");
        return;
      }
      if (!skippedSteps.includes(12) && !selectedResume) {
        toast.error("Please upload your resume");
        return;
      }

      // Submit full form
      const formData = {
        full_name: data.full_name,
        dob: data.dob,
        guardian: {
          guardianName: data.guardian.guardianName,
          phoneNumber: data.guardian.phoneNumber,
          occupation: data.guardian.occupation,
        },
        address: {
          street: data.address.street,
          city: data.address.city,
          postalCode: data.address.postalCode,
          state: data.address.state,
          country: data.address.country,
        },
        education: selectedEducation,
        projects: selectedProject,
        workExperience: selectedExperience,
        certifications: selectedCertificate,
        socialLinks: selectedSocialLinks,
        skills: selectedSkills,
        languages: selectedLanguages,
        areasOfInterests: selectedInterest,
        currentlyLookingFor: selectedCurrentlyLookingFor,
        resume: selectedResume,
      };

      console.log("Final Submit:", formData);
      // submit to backend
    }
  };

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  const handleSkip = (tab: number) => {
    setSkippedSteps((prev) => [...prev, tab]);
    if (tab === 1) {
      setValue("full_name", "");
      setValue("dob", "");
      setValue("guardian", {
        guardianName: "",
        phoneNumber: "",
        occupation: "",
      });
    } else if (tab === 2) {
      setSelectedLanguages([]);
    } else if (tab === 3) {
      setSelectedInterest([]);
    } else if (tab === 4) {
      setSelectedCurrentlyLookingFor([]);
    } else if (tab === 5) {
      setValue("address", {
        street: "",
        city: "",
        postalCode: "",
        state: "",
        country: "",
      });
    } else if (tab === 6) {
      setSelectedEducation([]);
    } else if (tab === 7) {
      setSelectedProject([]);
    } else if (tab === 8) {
      setSelectedExperience([]);
    } else if (tab === 9) {
      setSelectedCertificate([]);
    } else if (tab === 10) {
      setSelectedSkills([]);
    } else if (tab === 11) {
      setSelectedSocialLinks([]);
    } else if (tab === 12) {
      setSelectedResume(null);
    }

    setStep((prev) => prev + 1);
  };

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
            {step === 8 && <WorkExperience onChange={setSelectedExperience} />}
            {step === 9 && <Certifications onChange={setSelectedCertificate} />}
            {step === 10 && (
              <Skills
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
              />
            )}
            {step === 11 && (
              <SocialLink setSelectedSocialLinks={setSelectedSocialLinks} />
            )}
            {step === 12 && (
              <ResumeUpload
                selectedResume={selectedResume}
                setSelectedResume={setSelectedResume}
              />
            )}
            {step === 13 && <SuccessTab />}

            {step !== 13 && (
              <div className="flex items-center gap-3 justify-end mt-5">
                <Button
                  onClick={() => handleSkip(step)}
                  type="button"
                  variant="natural"
                  className="px-6 py-[14px]"
                >
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
