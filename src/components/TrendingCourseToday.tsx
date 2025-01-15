"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { COURSE_DETAILS } from "@/mockData/course";
import CourseCard from "./CourseCard";

const TrendingCourseToday = () => {
  return (
    <div className="max-lg:px-4 max-w-full xl:max-w-[1250px] mx-auto">
      <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left">
        <span className="highlight">Trending</span> Today⚡
      </h3>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 2
            },
          }}
        >
          {COURSE_DETAILS.map((details, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center w-full">
              <CourseCard
                courseDetails={details}
                variant={index % 2 === 0 ? "A" : "B"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default TrendingCourseToday;
