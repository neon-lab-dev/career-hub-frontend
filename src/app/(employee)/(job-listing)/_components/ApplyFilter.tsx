"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import InterhshipType from "./InterhshipType";
import ExperiencedLevel from "./ExperiencedLevel";
import InternshipMode from "./InternshipMode";
import MonthlyStipend from "./MonthlyStipend";
import MaxDuration from "./MaxDuration";

const ApplyFilter = () => {
  const [selectedInternshipType, setSelectedInternshipType] =
    useState<string>("");
  const [experienceLevel, setExperienceLevel] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [monthlyStipend, setMonthlyStipend] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Clear all the states
  const clearFilters = () => {
    setSelectedInternshipType("");
    setMonthlyStipend(0);
    setDuration(0);
    setSelectedMode("");
    setExperienceLevel("");
  };

  return (
    <div className="font-plus-jakarta-sans h-full w-full max-w-[401px] p-6 rounded-3xl bg-white border border-neutral-550 flex flex-col gap-8">
      {/* Heading & HR */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-neutral-900 text-[18px] font-600">
            {/* Apply Filters */}
          </h1>

          <button
            onClick={clearFilters}
            className="text-primary-550 text-[18px] font-500"
          >
            Clear
          </button>
        </div>
        <hr className="border border-neutral-650" />
      </div>

      {/* Internship Type Dropdown */}
      <InterhshipType
        selectedInternshipType={selectedInternshipType}
        setSelectedInternshipType={setSelectedInternshipType}
      />

      {/* Experience Level Dropdown */}
      <ExperiencedLevel
        experienceLevel={experienceLevel}
        setExperienceLevel={setExperienceLevel}
      />

      {/* Internship Mode */}
      <InternshipMode
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />

      {/* Monthly Stipend*/}
      <MonthlyStipend
        monthlyStipend={monthlyStipend}
        setMonthlyStipend={setMonthlyStipend}
      />

      {/* Max Duration */}
      <MaxDuration 
       duration={duration} 
       setDuration={setDuration} />
    </div>
  );
};

export default ApplyFilter;
