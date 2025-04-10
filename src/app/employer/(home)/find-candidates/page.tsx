"use client";
import { ICONS } from "@/assets";
import Button from "@/components/Button";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import Image from "next/image";
import { useState } from "react";
import CandidatesTable from "./_components/CandidatesTable";

const filtersConfig = [
  {
    label: "Gender",
    items: ["Male", "Female", "Other"],
    icon: ICONS.downArrow,
    key: "gender",
  },
  {
    label: "Location",
    items: ["New York", "San Francisco", "Chicago", "Remote"],
    icon: ICONS.downArrow,
    key: "location",
  },
  {
    label: "Skill",
    items: ["JavaScript", "React", "Node.js", "Python"],
    icon: ICONS.downArrow,
    key: "skill",
  },
  {
    label: "Language",
    items: ["English", "Spanish", "Hindi", "French"],
    icon: ICONS.downArrow,
    key: "language",
  },
  {
    label: "Experience",
    items: ["0-1 years", "2-4 years", "5-7 years", "8+ years"],
    icon: ICONS.downArrow,
    key: "experience",
  },
  {
    label: "Designation",
    items: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "UI/UX Designer",
    ],
    icon: ICONS.downArrow,
    key: "designation",
  },
];

const FindCandidates = () => {
  const [filters, setFilters] = useState<Record<string, string | null>>({});

  const handleSelect = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    console.log(`${key}: ${value}`);
  };

  const handleSearch = () => {
    console.log("All Filters:", filters);

    // Individual values
    console.log("Language:", filters.language);
    console.log("Skill:", filters.skill);
    console.log("Gender:", filters.gender);
    console.log("Location:", filters.location);
    console.log("Experience:", filters.experience);
    console.log("Designation:", filters.designation);

    // You can now use this `filters` object to call an API, etc.
  };

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-5 bg-white border border-neutral-984 rounded-xl p-6">
        {/* Search Input */}
        <div className="relative max-w-[633px] w-full">
          <input
            type="text"
            placeholder="Select a category or enter keyword"
            className="pl-12 pr-4 py-[14px] border border-[#CAD5E2] rounded-lg focus:outline-none focus:border-primary-500 transition duration-300 w-full"
          />
          <Image
            src={ICONS.searchGray}
            alt="search-icon"
            className="size-6 absolute top-[14px] left-4"
          />
        </div>

        {/* Filter Dropdowns */}
        {filtersConfig.map(({ label, items, icon, key }) => (
          <SelectDropdown
            key={key}
            label={label}
            items={items}
            icon={icon}
            onSelect={(value:string) => handleSelect(key, value)}
            selectedData={filters[key] || null}
          />
        ))}
        <Button
          variant="normal"
          className="px-5 py-[14px] rounded-xl w-fit max-w-[182px] flex items-center gap-3"
          onClick={handleSearch}
        >
          <Image
            src={ICONS.search}
            alt="search-icon"
            className="size-6"
          />
          Show Results
        </Button>
      </div>
      <CandidatesTable className="w-full"/>
    </div>
  );
};

export default FindCandidates;
