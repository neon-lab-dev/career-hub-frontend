"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchField from "./SearchFieldComponent";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import FilterDropdown from "@/components/Reusable/FilterDropdown/FilterDropdown";
import Button from "@/components/Button";
import LocationSearch from "./LocationSearch";
import { useRouter } from "next/navigation";

const HeroComponent = () => {
  const router = useRouter();
  const [selectedEmploymentType, setSelectedEmploymentType] = useState<string | null>(null);
  const [selectedLocationType, setSelectedLocationType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  console.log(selectedLocation);

  const handleCategorySelect = (category: string) => {
    setSelectedEmploymentType(category);
    console.log("Selected:", category);
  };
  const handleLocationTypeSelect = (jobType: string) => {
    setSelectedLocationType(jobType);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
  
    if (selectedEmploymentType) params.set("employmentType", selectedEmploymentType);
    if (selectedLocationType) params.set("locationType", selectedLocationType);
    if (selectedLocation) params.set("location", selectedLocation);
  
    const path =
      selectedEmploymentType?.toLowerCase() === "internship"
        ? "/internship"
        : "/jobs";
  
    router.push(`${path}?${params.toString()}`);
  };
  

  return (
    <div className="pt-[136px] xl:pt-44 pb-28 bg-secondary-50">
      <div className="flex flex-col gap-[40px] xl:gap-28 wrapper">
        <div className="flex flex-col sm:items-center gap-5 justify-center sm:text-center ">
          {/* Title */}
          <h1 className="text-secondary-950 text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] font-700  xl:leading-[70px] tracking-[-1.28px] relative max-w-sm xl:max-w-none sm:max-w-lg md:max-w-3xl">
            <span>Start your career in</span>{" "}
            <span className="highlight text-white">HealthCare</span> Today{" "}
            <br className="hidden xl:block" />
            industry with us…
            <Image
              src={IMAGES.hero1}
              alt="hero1"
              width={106}
              height={106}
              quality={100}
              className="absolute h-[48px] w-[48px] xl:h-[106px] xl:w-[106px] -top-16 left-9 xl:-left-48"
            />
            <Image
              src={IMAGES.hero2}
              alt="hero1"
              width={106}
              height={106}
              quality={100}
              className="absolute h-[58px] w-[58px] xl:h-[106px] xl:w-[106px] -top-24 xl:-top-16 right-9 xl:-right-44 rotate-12 xl:rotate-0"
            />
          </h1>
          <p className="text-secondary-600 xl:max-w-3xl text-base sm:text-lg xl:text-xl leading-[126%] max-w-sm md:max-w-3xl font-Poppins">
            Find the best opportunities from leading healthcare providers, i.e.
            internships, jobs, skill programs, courses, events, etc.
          </p>

          <div className="flex items-center gap-3 mt-7">
            <FilterDropdown
              label="Employment Type"
              items={["Full-Time", "Part-Time", "Internship"]}
              icon={ICONS.downArrow}
              onSelect={handleCategorySelect}
            />
            <FilterDropdown
              label="Job Type"
              items={["Remote", "On Site"]}
              icon={ICONS.downArrow}
              onSelect={handleLocationTypeSelect}
            />

            <LocationSearch
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />

            <Button
              variant="normal"
              className="size-[60px] p-5 rounded-2xl"
              onClick={handleSearch}
            >
              <Image src={ICONS.search} alt="search-icon" className="size-6" />
            </Button>
          </div>

          {/* <SearchField /> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-3xl px-6 py-6 xl:py-8 xl:px-12 gap-3 xl:gap-28 items-center max-w-fit m-auto relative">
          {[
            {
              value: "10k+",
              label: "Companies Hiring",
            },
            {
              value: "100k+",
              label: "Registered Aspirants",
            },
            {
              value: "1000+",
              label: "Registered Openings",
            },
            {
              value: "600k+",
              label: "Learners",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-2 xl:min-w-[250px]"
            >
              <h4 className="text-[28px] xl:text-4xl font-800 bg-landing-stats-heading">
                {item.value}
              </h4>
              <span className="text-woodsmoke-800 text-base font-500 xl:text-xl">
                {item.label}
              </span>
            </div>
          ))}
          <Image
            src={IMAGES.hero3}
            alt="hero1"
            width={84}
            height={84}
            quality={100}
            className="absolute -bottom-20 xl:-top-40 left-6 xl:left-0 h-[61px] w-[61px] xl:h-[84px] xl:w-[84px] -rotate-12"
          />
          <Image
            src={IMAGES.hero4}
            alt="hero1"
            width={84}
            height={84}
            quality={100}
            className="absolute -bottom-24 xl:-top-40 xl:right-0 right-6 h-[61px] w-[61px] xl:h-[84px] xl:w-[84px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
