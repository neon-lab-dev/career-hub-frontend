import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {
  showApplyButton?: boolean;
};

const JobDetailCard = ({ showApplyButton }: Props) => {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-[20px] border border-neutral-100 bg-white">
      <div className="flex gap-3 items-center">
        <Image
          src={IMAGES.companyLogo}
          alt="Company Logo"
          height={64}
          width={64}
          className="h-16 w-16"
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[22px] -tracking-[0.44px] font-600 text-neutral-900">
            Frontend Developer Job
          </h3>
          <div className="flex items-center gap-2 body-large text-neutral-400">
            <span>Talkwisely Platforms</span>
            <div className="w-[5px] h-[5px] bg-neutral-400 rounded-full" />
            <span>Ahmedabad, India</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {["Full Time", "Onsite", "Entry Level"].map((tag) => (
          <div
            key={tag}
            className="py-2.5 font-500 rounded-md px-[18px] bg-white border border-secondary-200 text-sm text-secondary-400"
          >
            {tag}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-between items-center gap-36">
        <div className="flex flex-col gap-1 ">
          <span className="body-medium text-neutral-400">Job Offer</span>
          <span className="body-large !font-600 text-primary-500">
            ₹ 7 LPA - 12 LPA
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="muted" className="px-4 py-4">
            View full details
          </Button>
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
