import React from "react";
import SkillsContainerComponent from "./SkillsContainerComponent";
import { sampleJob } from "@/mockData/jobs";
import { twMerge } from "tailwind-merge";

const SkillsAndExtraBenefits = ({ className }: { className: string }) => {
  return (
    <div className={twMerge("min-w-[447px] flex flex-col gap-6", className)}>
      <SkillsContainerComponent title="Skills" labels={sampleJob.skills} />
      <SkillsContainerComponent
        title="Extra Benefits"
        labels={sampleJob.extraBenefits}
      />
    </div>
  );
};

export default SkillsAndExtraBenefits;
