import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import React from "react";

const SimilarJobsForYouComponent = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto">
        <span className="highlight">Similar Jobs</span> For You
      </h3>
      <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div key={index} className="carousel-item">
              <JobDetailCard wrapperClassName="min-w-[500px]" />
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
