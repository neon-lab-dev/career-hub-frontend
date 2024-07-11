"use client";
import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import ExperiencedLevel from "./ExperiencedLevel";
import InternshipMode from "./InternshipMode";
import MonthlyStipend from "./MonthlyStipend";
import MaxDuration from "./MaxDuration";
import { DEFAULT_QUERY_PARAMS, IDefaultQueryParams } from "../[jobType]/page";

type Props = {
  setFilterParams: Dispatch<SetStateAction<IDefaultQueryParams>>;
  filterParams: IDefaultQueryParams;
};

const ApplyFilter = ({ setFilterParams, filterParams }: Props) => {
  const [experienceLevel, setExperienceLevel] = useState<string>("");

  return (
    <div className="font-plus-jakarta-sans h-full w-full max-w-[401px] p-6 rounded-3xl bg-white border border-neutral-550 flex flex-col gap-8">
      {/* Heading & HR */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-neutral-900 text-[18px] font-600">
            Apply Filters
          </h1>

          <button
            onClick={() => {
              setFilterParams(DEFAULT_QUERY_PARAMS);
            }}
            className="text-primary-550 text-[18px] font-500"
          >
            Clear
          </button>
        </div>
        <hr className="border border-neutral-650" />
      </div>

      {/* Experience Level Dropdown */}
      <ExperiencedLevel
        experienceLevel={experienceLevel}
        setExperienceLevel={setExperienceLevel}
      />

      {/* Internship Mode */}
      <InternshipMode
        selectedMode={filterParams.locationType}
        setSelectedMode={(mode) => {
          setFilterParams((prev) => {
            return { ...prev, locationType: mode as string };
          });
        }}
      />

      {/* Monthly Stipend*/}
      <MonthlyStipend
        monthlyStipend={filterParams.salary}
        setMonthlyStipend={(stipend: number) => {
          setFilterParams((prev) => {
            return { ...prev, salary: stipend };
          });
        }}
      />

      {/* Max Duration */}
      <MaxDuration
        duration={filterParams.duration}
        setDuration={(duration: number) => {
          setFilterParams((prev) => {
            return { ...prev, duration };
          });
        }}
      />
    </div>
  );
};

export default ApplyFilter;
