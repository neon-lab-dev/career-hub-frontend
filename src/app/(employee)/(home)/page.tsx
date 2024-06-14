import Input from "@/components/Input";
import JobDetailCard from "@/components/JobDetailCard";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex gap-6 p-12 flex-wrap">
      <JobDetailCard /> <JobDetailCard showApplyButton />
    </div>
  );
};

export default HomePage;
