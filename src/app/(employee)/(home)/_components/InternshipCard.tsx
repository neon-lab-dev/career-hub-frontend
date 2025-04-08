import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ApplyJob from "../../(job-listing)/[jobType]/[jobId]/_components/ApplyJob";
import { IJob } from "@/types/job";

type TInternshipCardProps = {
  showApplyButton?: boolean;
  wrapperClassName?: string;
  job: IJob;
  isApplied?: boolean;
};

const InternshipCard: React.FC<TInternshipCardProps> = ({
  showApplyButton,
  wrapperClassName,
  job,
}) => {
  return (
    <Link
      href={`/${job.employmentType === "Internship" ? "internships" : "jobs"}/${
        job._id
      }`}
      className={twMerge(
        "w-[380px] h-[500px] bg-white font-plus-jakarta-sans border-2 border-neutral-100 rounded-2xl shadow-job-card-shadow relative hover:border-primary-500 transition-all duration-300 ease-in-out transform",
        wrapperClassName
      )}
    >
      {/* Banner image */}
      <Image
        src={IMAGES.internshipCardBg}
        alt=""
        className="w-full rounded-t-2xl"
      />
      <div className="p-6">
        {/* Company logo */}
        <div className="flex items-center gap-2">
          <Image
            src={IMAGES.companyLogo}
            alt=""
            className="size-8 object-cover"
          />
          <p className="text-neutral-400">Talkwisely Platforms</p>
        </div>

        <h1 className="text-neutral-900 text-xl font-700 mt-4">
          Frontend Developer Job
        </h1>

        {/* Job details */}
        <div className="flex flex-col gap-5 mt-6">
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
          <div className="flex items-center gap-1">
            <Image
              src={ICONS.sallary}
              alt="clock-icon"
              className="size-[18px]"
            />
            <p className="text-neutral-400">₹ 8,000-10,000 /month</p>
          </div>
        </div>

        {/* Required skills */}
        <div className="mt-6">
          <p className="text-neutral-400">Required Skills:</p>
          <div className="flex items-center gap-[10px] mt-2">
            <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
              Figma
            </div>
            <div className="px-3 py-[6px] text-secondary-600 font-500 text-sm bg-neutral-450 rounded-[999px]">
              Figma
            </div>
          </div>
        </div>

        {/* hr */}
        <hr className="w-full border border-neutral-100 h-[2px] my-6" />

        {/* Apply details */}
        <div className="flex items-center justify-between">
          <div className="px-[10px] py-[6px] bg-primary-50 text-secondary-800 text-sm font-medium rounded-lg">
            Internship
          </div>
          <Link
            href={`/${
              job.employmentType === "Internship" ? "internships" : "jobs"
            }/${job._id}`}
            className="text-primary-500 font-600 flex items-center gap-1"
          >
            View Details
            <Image src={ICONS.rightArrow} alt="" className="size-5" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default InternshipCard;
