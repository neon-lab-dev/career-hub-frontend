import NotFound from "@/components/NotFound";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";
import ApplyFilter from "../_components/ApplyFilter";
import { ICONS } from "@/assets";
import Image from "next/image";
import JobDetailCard from "@/components/JobDetailCard";

type Props = {
  params: {
    jobType: string;
  };
};


const jobDetails = [
  {
    _id: "1",
    companyLogo: ICONS.application,
    jobTitle: "Frontend Developer Job",
    companyName: "Talkwisely Platforms",
    location: "Ahmedabad, India",
    employmentType: ["Fulltime", "Onsite", "Entry level"],
    salary: "₹7 LPA - 12 LPA"
  },
  {
    _id: "2",
    companyLogo: ICONS.application,
    jobTitle: "Frontend Developer Job",
    companyName: "Talkwisely Platforms",
    location: "Ahmedabad, India",
    employmentType: ["Fulltime", "Onsite", "Entry level"],
    salary: "₹7 LPA - 12 LPA"
  },
  {
    _id: "3",
    companyLogo: ICONS.application,
    jobTitle: "Frontend Developer Job",
    companyName: "Talkwisely Platforms",
    location: "Ahmedabad, India",
    employmentType: ["Fulltime", "Onsite", "Entry level"],
    salary: "₹7 LPA - 12 LPA"
  },
];


export default function Page({ params: { jobType } }: Props) {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;
  if (jobType) return (
    <div className="wrapper bg-[#f5f6fa] py-6">
      <div className="flex justify-between">

      
      <ApplyFilter/>
      <div className="flex flex-col gap-9">
        {/* Search field */}
      <div className="bg-white rounded-[10px] w-full p-4 flex gap-2 justify-between items-center">
      <input 
        type="text" 
        placeholder="Search by Internship Title / Skills"
        className="bg-white focus:outline-none w-full" 
      />
      <Image 
        src={ICONS.magnifer} 
        alt="search-icon" 
        className="w-[18px] cursor-pointer"
      />
    </div>


    {/* Job cards */}
    {
      jobDetails.map((details, index) => 
        <JobDetailCard 
      wrapperClassName=""
        key={index}
        _id={details._id}
        companyLogo={details.companyLogo}
        jobTitle={details.jobTitle}
        companyName={details.companyName}
        location={details.location}
        employmentType={details.employmentType}
        salary={details.salary}
        showApplyButton
        />
      )
    }
    
      </div>
      </div>
    </div>
  );
}
