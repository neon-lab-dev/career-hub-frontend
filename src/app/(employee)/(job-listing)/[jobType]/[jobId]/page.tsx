import NotFound from "@/components/NotFound";
import Image from "next/image";
import { IMAGES } from "@/assets";
import JobShareButton from "./_components/JobShareButtonComponent";
import Button from "@/components/Button";
import SkillsContainerComponent from "./_components/SkillsContainerComponent";
import Link from "next/link";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";
import { sampleJob } from "@/mockData/jobs";
import SimilarJobsForYou from "./_components/SimilarJobsForYouComponent";
import TrendingCourseToday from "@/components/TrendingCourseToday";
import OurValuableHiringPartners from "@/components/OurValuableHiringPartners";
import WhatWeDo from "@/components/WhatWeDo";

type Props = {
  params: {
    jobType: string;
    jobId: string;
  };
};

const JobIdPage = ({ params: { jobType, jobId } }: Props) => {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;

  return (
    <div>
      <div className="wrapper flex flex-col gap-16">
        {/* job titles and cta */}
        <div className="py-16 flex items-end justify-between">
          <div className="flex gap-5 items-center">
            <Image
              src={IMAGES.companyLogo}
              alt="Company Logo"
              height={99}
              width={99}
              className="h-[99px] w-[99px]"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[32px] -tracking-[0.44px] font-600 text-neutral-900">
                Frontend Developer Job
              </h3>
              <div className="flex items-center gap-2 text-[22px] text-neutral-400">
                <span>Talkwisely Platforms</span>
                <div className="w-[5px] h-[5px] bg-neutral-400 rounded-full" />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <JobShareButton jobTitle="Test Title" />
            <Button>Apply Now</Button>
          </div>
        </div>
        {/* job details */}
        <div className="flex gap-6">
          <div className="flex-grow flex flex-col gap-6">
            <div className="p-6 rounded-[22px] border border-secondary-200 text-xl flex flex-col gap-3">
              <h3 className="capitalize font-600 text-neutral-800">
                About {jobType.substring(0, jobType.length - 1)}
              </h3>
              <p className="font-400 text-neutral-700 flex flex-col gap-6">
                {sampleJob.about
                  .split("\n")
                  .filter((res) => res)
                  .map((para, index) => (
                    <span key={index}>{para}</span>
                  ))}
                <span>Job Role: Frontend Developer</span>
              </p>{" "}
              <h3 className="capitalize font-600 text-neutral-800 mt-6">
                Roles and Responsibilities
              </h3>
              <ul className="font-400 text-neutral-700 flex flex-col gap-1 list-disc">
                {sampleJob.responsibilities
                  .split("\n")
                  .filter((res) => res)
                  .map((res, index) => (
                    <li key={index} className="ml-8">
                      {res}
                    </li>
                  ))}
              </ul>
              <div className="flex flex-col gap-1 font-400 mt-2 text-neutral-700">
                <span>Job-Type: Full-Time</span>
                <span>Location: Ahmedabad, India</span>
              </div>
            </div>
            <div className="p-6 rounded-[22px] border border-secondary-200 text-xl flex flex-col gap-6">
              <h3 className="capitalize font-600 text-neutral-800 text-2xl">
                About the Company
              </h3>
              <hr />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="font-700 text-xl text-neutral-800">
                    Talkwisely Platforms
                  </span>
                  <div className="flex gap-6 items-center text-base font-500 text-primary-500">
                    <Link href="#" target="_blank">
                      Website
                    </Link>
                    <div className="h-2 w-2 rounded-full bg-secondary-100" />
                    <Link href="#" target="_blank">
                      Location
                    </Link>
                  </div>
                  <div className="flex gap-6 items-center text-base font-500 text-secondary-400">
                    <span>Educational Technology </span>
                    <div className="h-2 w-2 rounded-full bg-secondary-100" />
                    <span>1-10 employees </span>
                  </div>
                </div>
                <Image
                  src={IMAGES.companyLogo}
                  alt="Company Logo"
                  height={56}
                  width={56}
                  className="h-[56px] w-[56px] rounded-full"
                />
              </div>
              <hr />
              <p className="font-400 text-neutral-700 flex flex-col gap-6">
                {sampleJob.about
                  .split("\n")
                  .filter((res) => res)
                  .map((para, index) => (
                    <span key={index}>{para}</span>
                  ))}
              </p>
            </div>
          </div>
          <div className="min-w-[447px] flex flex-col gap-6">
            <SkillsContainerComponent
              title="Skills"
              labels={sampleJob.skills}
            />
            <SkillsContainerComponent
              title="Extra Benefits"
              labels={sampleJob.extraBenefits}
            />
          </div>
        </div>
      </div>
      <SimilarJobsForYou />
      <TrendingCourseToday />
      <OurValuableHiringPartners />
      <WhatWeDo />
    </div>
  );
};

export default JobIdPage;
