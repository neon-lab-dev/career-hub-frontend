import NotFound from "@/components/NotFound";
import Image from "next/image";
import { IMAGES } from "@/assets";
import JobShareButton from "./_components/JobShareButton";
import Button from "@/components/Button";
import { SkillsContainer } from "./_components/SkillsContainer";
import Link from "next/link";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";

type Props = {
  params: {
    jobType: string;
    jobId: string;
  };
};

const skills = ["React", "Node", "MongoDB", "Express", "HTML", "CSS"];
const extraBenefits = [
  "Health Insurance",
  "Paid Time Off",
  "Remote Work",
  "Flexible Work Hours",
];

const about =
  "Mployee.Me is a pioneering company dedicated to empowering job seekers in their quest to secure the best jobs by overcoming the challenges posed by Applicant Tracking Systems (ATS). With our cutting-edge ResuScan Software, we provide a comprehensive solution to optimize your resume and increase your chances of success. Our innovative technology allows you to obtain your ATS Resume Score, enabling you to gauge the effectiveness of your resume. Not only that, but our software identifies any mistakes or areas for improvement based on ATS requirements.\n Additionally, we offer valuable insights into the right resume keywords that align with specific job descriptions, ensuring your application stands out to employers. These efforts can help a job seeker secure the right career in 20+ industries. At Mployee.Me, we are committed to equipping job seekers with the tools and knowledge to excel in their career aspirations.";

const rolesAndResponsibilities =
  "Developing new user-facing features using React.js\nBuilding reusable components and front-end libraries for future use\nTranslating designs and wireframes into high-quality code\nOptimizing components for maximum performance across a vast array of web-capable devices and browsers\nDeveloping new user-facing features using React.js\nBuilding reusable components and front-end libraries for future use\nTranslating designs and wireframes into high-quality code\nOptimizing components for maximum performance across a vast array of web-capable devices and browsers\nDeveloping new user-facing features using React.js\nBuilding reusable components and front-end libraries for future use\nTranslating designs and wireframes into high-quality code\nOptimizing components for maximum performance across a vast array of web-capable devices and browsers\nDeveloping new user-facing features using React.js\nBuilding reusable components and front-end libraries for future use\nTranslating designs and wireframes into high-quality code\nOptimizing components for maximum performance across a vast array of web-capable devices and browsers";

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
                {about
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
                {rolesAndResponsibilities
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
                {about
                  .split("\n")
                  .filter((res) => res)
                  .map((para, index) => (
                    <span key={index}>{para}</span>
                  ))}
              </p>
            </div>
          </div>
          <div className="min-w-[447px] flex flex-col gap-6">
            <SkillsContainer title="Skills" labels={skills} />
            <SkillsContainer title="Extra Benefits" labels={extraBenefits} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobIdPage;
