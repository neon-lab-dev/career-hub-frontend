"use client";

import SearchField from "@/components/reusable/SearchField";
import React from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";
import location from "../../../assets/icons/location.svg";
import Button from "@/components/reusable/Button";
import CourseCard from "@/components/reusable/CourseCard";
import cuveteLogo from "../../../assets/images/cuvette-logo.png";
import cuveteLogo2 from "../../../assets/images/cuvette-logo2.png";
import student1 from "../../../assets/images/student-1.png";
import student2 from "../../../assets/images/student2.png";

export type TCourseDetails = {
  logo: any,
  title: string,
  features: string[],
  path: string,
  image: any
}

const HomePage = () => {
  const courseDetails: TCourseDetails[] = [
    {
    logo: cuveteLogo,
    title: "Pay After Placement Program!",
    features: [
      "100% Job guarantee with average CTC of 5 LPA",
      "Direct Referral in our 6500+ partner companies",
      "Resume building, 1:1 interviews, Mentorship"
    ],
    path: "",
    image: student1
  },
    {
    logo: cuveteLogo2,
    title: "Full Stack Development",
    features: [
      "100% Fully Refundable Program",
      "Earn upto  25LPA Salary",
      "Top mentors from MAANG"
    ],
    path: "",
    image: student2
  },
 
 
]
  return (
    <div>
      HomePage
      <SearchField
        searchPlaceholder="Job title or keyword"
        locationPlaceholder="Any Location"
        // onSearch={handleSearchChange}
        // handleLocation={handleLocationClick}
        searchIcon={searchIcon}
        locationIcon={location}
        className=""
      />


      <Button
        variant="applied"
        onClick={() => console.log("Applied button clicked")}
      >
        Applied
      </Button>
      <Button
        variant="rejected"
        onClick={() => console.log("rejected button clicked")}
      >
        rejected
      </Button>
      <Button
        variant="hired"
        onClick={() => console.log("hired button clicked")}
      >
        hired
      </Button>
      <Button
        variant="interview"
        onClick={() => console.log("interview button clicked")}
      >
        interview
      </Button>


      <div className="flex overflow-hidden gap-6">
      {
        courseDetails.map((details, index) => 
          <CourseCard key={index} courseDetails={details} variant={index % 2 === 0 ? "A" : "B"}/>
        )
      }
      </div>
    </div>
  );
};

export default HomePage;
