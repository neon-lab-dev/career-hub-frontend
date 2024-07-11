import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import { jobDetails } from "@/mockData/jobCard";
import { getLatestJobs } from "@/api/jobs";
import Link from "next/link";
import React from "react";

const LatestJobYouMightLikeComponent = async () => {
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
      <Link href="/jobs">
        <Button variant="outline" className="px-12 py-5">
          View all openings
        </Button>
      </Link>
    </div>
  );
};

export default LatestJobYouMightLikeComponent;
