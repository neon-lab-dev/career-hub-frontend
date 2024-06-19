import React from "react";
import SkillChip from "./SkillChip";

type Props = {
  title: string;
  labels: string[];
};

export const SkillsContainer = ({ labels, title }: Props) => {
  return (
    <div className="flex flex-col p-6 rounded-[22px] border border-secondary-200 gap-2.5">
      <span className="text-neutral-800 text-xl font-600">{title}</span>
      <div className="flex flex-wrap gap-3">
        {labels.map((label) => (
          <SkillChip label={label} key={label} />
        ))}
      </div>
    </div>
  );
};
