"use client";
import back from "@/assets/icons/arrow_back.svg";
import { handleGetJobByIdForAdminService } from "@/api/jobs";
import SkillsAndExtraBenefits from "@/app/(employee)/(job-listing)/[jobType]/[jobId]/_components/SkillsAndExtraBenefits";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  params: {
    id: string;
  };
};

const Job = ({ params: { id } }: Props) => {
  const { isLoading, data: job } = useQuery({
    queryKey: ["admin", "employee", id],
    queryFn: () => handleGetJobByIdForAdminService(id),
  });
  if (isLoading) return <Loading className="h-[60vh] w-full" />;
  if (!job) return <NotFound />;
  return (
    <div className="w-full p-6">
      <div className="flex flex-col xl:gap-16 p-8 bg-white  rounded-xl">
        {/* job titles and cta */}
        <div className="py-16 flex items-end justify-between">
          <div className="flex gap-5 items-center">
            <Link
              href="/admin/jobs-posted"
              className="text-neutral-950 font-700 text-xl flex gap-2 items-center"
            >
              <Image src={back} className="h-9 w-9" alt="" />
            </Link>
            <Image
              src={job.companyDetails.logo}
              alt="Company Logo"
              height={99}
              width={99}
              className="h-[62px] w-[62px] rounded-lg"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[20px] lg:text-[24px] -tracking-[0.44px] font-600 text-neutral-900">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-sm lg:text-base text-neutral-400">
                <span>{job.companyDetails.companyName}</span>
                <div className="w-[5px] h-[5px] bg-neutral-400 rounded-full" />
                <span>{job.locationType}</span>
              </div>
            </div>
          </div>
        </div>
        {/* job details */}
        <div className="flex gap-6">
          <div className="flex-grow flex flex-col gap-4 xl:gap-6">
            <div className="p-6 rounded-[22px] border border-secondary-200 text-base lg:text-xl flex flex-col gap-3 lg:gap-3">
              <h3 className="capitalize font-600 text-neutral-800">
                About Job
              </h3>
              <p className="font-400 text-neutral-700 flex flex-col gap-3 lg:gap-6">
                {job.description
                  .split("\n")
                  .filter((res) => res)
                  .map((para, index) => (
                    <span key={index}>{para}</span>
                  ))}
              </p>{" "}
              <h3 className="capitalize font-600 text-neutral-800 mt-2 lg:mt-6">
                Roles and Responsibilities
              </h3>
              <ul className="font-400 text-neutral-700 flex flex-col gap-1 list-disc">
                {job.responsibilities
                  .split("\n")
                  .filter((res) => res)
                  .map((res, index) => (
                    <li key={index} className="ml-8">
                      {res}
                    </li>
                  ))}
              </ul>
              <h3 className="capitalize font-600 text-neutral-800 mt-2 lg:mt-6">
                Requirements
              </h3>
              <ul className="font-400 text-neutral-700 flex flex-col gap-1 list-disc">
                {job.requirements
                  .split("\n")
                  .filter((res) => res)
                  .map((res, index) => (
                    <li key={index} className="ml-8">
                      {res}
                    </li>
                  ))}
              </ul>
              <div className="flex flex-col gap-1 font-400 mt-2 text-neutral-700">
                <span>Job-Type: {job.employmentType}</span>
                <span>Location: {job.location}</span>
              </div>
            </div>
            <SkillsAndExtraBenefits
              extraBenefits={job.extraBenefits}
              skills={job.requiredSkills}
              className="grid grid-cols-2 gap-6"
            />
            <div className="p-4 lg:p-6 rounded-[22px] border border-secondary-200 text-xl flex flex-col gap-6">
              <h3 className="capitalize font-600 text-neutral-800 text-2xl">
                About the Company
              </h3>
              <hr />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="font-700 text-lg lg:text-xl text-neutral-800">
                    {job.companyDetails.companyName}
                  </span>
                  <div className="flex gap-3 lg:gap-6 items-center text-sm lg:text-base font-500 text-primary-500">
                    <Link href={job.companyDetails.websiteLink} target="_blank">
                      Website
                    </Link>
                    <div className="h-2 w-2 rounded-full bg-secondary-100" />
                    <Link href="#" target="_blank">
                      {job.location}
                    </Link>
                  </div>
                  <div className="flex gap-6 items-center text-base font-500 text-secondary-400">
                    <span>{job.companyDetails.industryType}</span>
                  </div>
                </div>
                <Image
                  src={job.companyDetails.logo}
                  alt="Company Logo"
                  height={56}
                  width={56}
                  className="h-[56px] w-[56px] rounded-full"
                />
              </div>
              <hr />
              <p className="font-400 text-neutral-700 flex flex-col gap-6">
                {job.companyDetails.bio
                  .split("\n")
                  .filter((res) => res)
                  .map((para, index) => (
                    <span key={index}>{para}</span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
