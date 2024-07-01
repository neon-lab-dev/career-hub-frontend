import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import { jobDetails } from "@/mockData/jobCard";
import React from "react";

const SimilarJobsForYouComponent = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto">
        <span className="highlight">Similar Jobs</span> For You
      </h3>
      <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
            {jobDetails.map((details, index) => (
              <div key={index} className="carousel-item">
                <JobDetailCard
                  wrapperClassName="xl:min-w-[500px]"
                  _id={details._id}
                  companyLogo={details.companyLogo}
                  jobTitle={details.jobTitle}
                  companyName={details.companyName}
                  location={details.location}
                  employmentType={details.employmentType}
                  salary={details.salary}
                  showApplyButton
                />
              </div>
            ))}
        </div>
      </div>
      <Button variant="outline" className="px-12 py-5">
        View all openings
      </Button>
    </div>
  );
};

export default SimilarJobsForYouComponent;
