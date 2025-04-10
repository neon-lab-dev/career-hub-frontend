import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import { jobDetails } from "@/mockData/jobCard";
import { getLatestJobs } from "@/api/jobs";
import Link from "next/link";
import React from "react";
import NoDataFound from "@/components/NoDataFound";

const LatestJobs = async () => {
  const jobs = await getLatestJobs();
  if (!jobs || jobs.length === 0) return null;
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left">
        <span className="highlight">
          Latest Jobs
          <br className="xl:hidden" />
        </span>{" "}
        You Might Like
      </h3>
      {
        jobs.length === 0 ?
        <NoDataFound message="No Jobs Available"/> :
        <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {jobs?.map((details, index) => (
            <div key={index} className="carousel-item">
              <JobDetailCard
                wrapperClassName="xl:min-w-[500px]"
                job={details}
              />
            </div>
          ))}
        </div>
      </div>
      }
      <Link href="/jobs">
        <Button variant="normal" className="px-9 py-4">
          View all openings
        </Button>
      </Link>
    </div>
  );
};

export default LatestJobs;
