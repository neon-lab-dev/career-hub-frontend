import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import CourseCard from "@/components/reusable/CourseCard";
import React from "react";
import searchIcon from "@/assets/icons/search-icon.svg";
import location from "@/assets/icons/location.svg";
import { COURSE_DETAILS } from "@/mockData/course";

const TrendingTodayComponent = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto">
        <span className="highlight">Trending</span> Today⚡
      </h3>
      <div className="w-full overflow-hidden wrapper-left">
        <div className="flex gap-8 w-full overflow-x-auto">
          {COURSE_DETAILS.map((details, index) => (
            <CourseCard
              key={index}
              courseDetails={details}
              variant={index % 2 === 0 ? "A" : "B"}
            />
          ))}
        </div>
      </div>
      {/* slider */}
    </div>
  );
};

export default TrendingTodayComponent;
