"use client"
import React, { useState } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";

const ApplyFilter = () => {
    const [value, setValue] = useState(25);
  return (
    <div className="font-plus-jakarta-sans max-w-[401px] p-6 rounded-3xl bg-white border border-neutral-550 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-neutral-900 text-[18px] font-600">
            Apply Filters
          </h1>

          <button className="text-primary-550 text-[18px] font-500">
            Clear
          </button>
        </div>
        <hr className="border border-neutral-650" />
      </div>

      {/* Internship Type Dropdown */}
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="" className="text-neutral-960 text-base font-500">
          Internship Type
        </label>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="bg-white rounded-xl border border-neutral-650 p-4 text-sm font-normal flex items-center justify-between"
          >
            Select Tech / Non-Tech
            <Image src={IMAGES.arrowDown} alt="arrow-down" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-4 shadow flex flex-col gap-4"
          >
            <li>Remote</li>
            <li>On-field</li>
          </ul>
        </div>
      </div>

      {/* Experience Level Dropdown */}
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
            Select Level
            <Image src={IMAGES.arrowDown} alt="arrow-down" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-4 shadow flex flex-col gap-4"
          >
            <li>Fresher</li>
            <li>Entry Level</li>
            <li>Experienced</li>
          </ul>
        </div>
      </div>

      {/* Internship Mode */}
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="" className="text-neutral-960 text-base font-500">
          Internship Mode
        </label>
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="radio-8"
            id="remote-internship"
            className="radio radio-error border-[2px] border-neutral-970"
          />
          <label
            htmlFor="remote-internship"
            className="text-sm font-500 text-secondary-650 cursor-pointer"
          >
            Remote Internship
          </label>
        </div>
      </div>

      {/* Monthly Stipend*/}
      <div className="flex flex-col gap-[6px]">
      <label htmlFor="" className="text-neutral-960 text-base font-500">
        Monthly Stipend
      </label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        className="range h-[10px] rounded-[100px] bg-neutral-550"
        step={30}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>0</span>
        <span>5K</span>
        <span>10K</span>
        <span>20K</span>
      </div>
    </div>



    </div>
  );
};

export default ApplyFilter;
