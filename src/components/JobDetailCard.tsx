import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { IJob } from "@/types/job";
import ApplyJob from "@/app/(employee)/(job-listing)/[jobType]/[jobId]/_components/ApplyJob";

type Props = {
  showApplyButton?: boolean;
  wrapperClassName?: string;
  job: IJob;
  isApplied?: boolean;
};

const JobDetailCard = ({
  showApplyButton,
  wrapperClassName,
  job,
  isApplied,
}: Props) => {
  console.log(job);
  if (!job) return null;
  return (
    <div
      className={twMerge(
        "max-w-[450px] min-h-[530px] bg-white font-plus-jakarta-sans border border-neutral-100 rounded-2xl shadow-job-card-shadow relative hover:border-primary-500 hover:scale-105 transition-all duration-300 ease-in-out transform",
        wrapperClassName
      )}
    >
      {/* Banner image */}
      <Image src={IMAGES.jobCardBg} alt="" className="w-full rounded-t-2xl" />
      <div className="p-7 absolute top-12">
        {/* Company logo */}
        <Image
          src={IMAGES.companyLogo}
          alt=""
          className="size-[91px] object-cover"
        />
        <h1 className="text-neutral-900 text-2xl font-700 mt-3">
          Frontend Developer Job
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-neutral-400">Talkwisely Platforms Pvt. Ltd.</p>
          <p className="text-neutral-400">Ahmedabad, India</p>
        </div>

        <p className="text-neutral-400 mt-6">
          Lorem ipsum dolor sit amet consectetur. Interdum nisl ultricies
          elementum erat vestibulum. Nisl faucibus null
        </p>

      {/* Job details */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1">
            <Image src={ICONS.clock} alt="clock-icon" className="size-[18px]" />
            <p className="text-neutral-400">Fulltime</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={ICONS.jobType}
              alt="clock-icon"
              className="size-[18px]"
            />
            <p className="text-neutral-400">On Site</p>
          </div>
        </div>

        {/* Required skills */}
        <div className="flex items-center gap-[10px] mt-[18px]">
          <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
            Figma
          </div>
          <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
            Figma
          </div>
        </div>

        {/* hr */}
        <hr className="w-full border border-neutral-100 h-[2px] my-6" />

      {/* Apply details */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-neutral-400">Job Offer</p>
            <h2 className="text-primary-500 text-xl font-700 mt-1">
              ₹ 7 LPA - 12 LPA
            </h2>
          </div>

          {/* Apply btn */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${
                job.employmentType === "Internship" ? "internships" : "jobs"
              }/${job._id}`}
            >
              <Button variant="muted" className="px-5 py-4">
                View full details
              </Button>
            </Link>
            {showApplyButton && (
              <div className="hidden sm:block">
                <ApplyJob jobId={job._id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
