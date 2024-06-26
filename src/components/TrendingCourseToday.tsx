import React from "react";
import { COURSE_DETAILS } from "@/mockData/course";
import CourseCard from "@/components/CourseCard";

const TrendingCourseToday = () => {
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left">
        <span className="highlight">Trending</span> Today⚡
      </h3>
      <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {COURSE_DETAILS.map((details, index) => (
            <div key={index} className="carousel-item">
              <CourseCard
                courseDetails={details}
                variant={index % 2 === 0 ? "A" : "B"}
              />
            </div>
          ))}
        </div>
      </div>
      {/* slider */}
    </div>
  );
};

export default TrendingCourseToday;
