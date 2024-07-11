import React from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";

type TExperiencedLevelProps = {
  experienceLevel: string;
  setExperienceLevel: React.Dispatch<React.SetStateAction<string>>;
};

const ExperiencedLevel: React.FC<TExperiencedLevelProps> = ({
  experienceLevel,
  setExperienceLevel,
}) => {
  // Experience level
  const handleExperienceLevel = (level: string) => {
    setExperienceLevel(level);
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor="" className="text-neutral-960 text-base font-500">
        Experience Level
      </label>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="bg-white rounded-xl border border-neutral-650 p-4 text-sm font-normal flex items-center justify-between"
        >
          {experienceLevel ? experienceLevel : "Select Level"}

          <Image src={IMAGES.arrowDown} alt="arrow-down" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-4 shadow flex flex-col gap-4"
        >
          <li
            onClick={() => handleExperienceLevel("Fresher")}
            className="cursor-pointer"
          >
            Fresher
          </li>
          <li
            onClick={() => handleExperienceLevel("Entry Level")}
            className="cursor-pointer"
          >
            Entry Level
          </li>
          <li
            onClick={() => handleExperienceLevel("Experienced")}
            className="cursor-pointer"
          >
            Experienced
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencedLevel;
