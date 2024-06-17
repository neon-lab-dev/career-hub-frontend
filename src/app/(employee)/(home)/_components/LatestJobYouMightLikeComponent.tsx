import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import React from "react";

const LatestJobYouMightLikeComponent = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto">
        <span className="highlight">Latest Jobs</span> You Might Like
      </h3>
      <div className="w-full overflow-hidden wrapper-left">
        <div className="flex gap-8 w-full overflow-x-auto">
          <JobDetailCard wrapperClassName="min-w-[500px]" />
          <JobDetailCard wrapperClassName="min-w-[500px]" />
          <JobDetailCard wrapperClassName="min-w-[500px]" />
          <JobDetailCard wrapperClassName="min-w-[500px]" />
          <JobDetailCard wrapperClassName="min-w-[500px]" />
          <JobDetailCard wrapperClassName="min-w-[500px]" />
        </div>
      </div>
      <Button variant="outline" className="px-12 py-5">
        View all openings
      </Button>
    </div>
  );
};

export default LatestJobYouMightLikeComponent;
