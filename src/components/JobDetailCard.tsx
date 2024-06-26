import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  showApplyButton?: boolean;
  wrapperClassName?: string;
  _id: string;
  companyLogo: any;
    jobTitle: string;
    companyName: string;
    location: string;
    employmentType: string[],
    salary: string;

};

const JobDetailCard = ({ showApplyButton, wrapperClassName, _id, companyLogo, jobTitle, companyName, location, employmentType, salary }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 xl:gap-5 p-4 xl:p-6 rounded-[20px] border border-neutral-100 bg-white",
        wrapperClassName
      )}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={companyLogo}
          alt="Company Logo"
          height={64}
          width={64}
          className="h-9 w-9 xl:h-16 xl:w-16"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-base xl:text-[22px] -tracking-[0.44px] font-600 text-neutral-900">
            {jobTitle}
          </h3>
          <div className="flex items-center text-xs gap-2 xl:text-[18px] text-neutral-400">
            <span>{companyName}</span>
            <div className="w-[5px] h-[5px] bg-neutral-400 rounded-full" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {employmentType?.map((tag) => (
          <div
            key={tag}
            className=" py-2 xl:py-2.5 font-500 rounded-md px-3 xl:px-[18px] bg-white border border-secondary-200 text-xs xl:text-sm text-secondary-400"
          >
            {tag}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-between items-center gap-16 xl:gap-36">
        <div className="flex flex-col gap-1 ">
          <span className="text-xs xl:text-base text-neutral-400">
            Job Offer
          </span>
          <span className="text-x xl:text-base !font-600 text-primary-500">
            {salary}
          </span>
        </div>
        <div className="flex items-center gap-3">
         <Link href={`/${_id}`}>
         <Button variant="muted" className="px-4 py-4">
            View full details
          </Button>
         </Link>
          {showApplyButton && (
            <Button variant="primary" className="px-6 py-4">
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
