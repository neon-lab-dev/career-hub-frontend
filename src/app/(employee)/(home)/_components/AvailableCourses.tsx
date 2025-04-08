"use client";
import { getAllCourses } from "@/api/admin";
import { ICourse } from "@/app/admin/(pages)/courses/page";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./CourseCard";
import NoDataFound from "@/components/NoDataFound";

const AvailableCourses = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left capitalize">
        <span className="highlight">Courses</span> for you
      </h3>
      {
        data?.courses?.length < 1 ?
        <NoDataFound message="No Course Available" /> :
        <div className="w-full overflow-x-scroll wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          <CourseCard/>
          {data?.courses.map((course:ICourse) => (
            <div
              key={course._id}
              className="carousel-item bg-white flex flex-col gap-3 rounded-xl shadow border p-3 max-w-[300px]"
            >
              <Image
                src={course.thumbnail.url}
                alt={course.name}
                width={300}
                height={300}
                className="rounded-xl cursor-pointer object-cover w-[300px] h-[300px]"
              />

              <h1 className="font-Poppins font-semibold text-[19.583px] sm:text-[24px] leading-[20.562px] sm:leading-[34.743px] -tracking-wide capitalize text-secondary-950">
                {course.name}
              </h1>

              <p className="font-Poppins font-normal text-[7.833px] md:text-[13.236px] leading-[13.897px] tracking-tight">
                {course.description.length > 70
                  ? `${course.description.slice(0, 70)}...`
                  : course.description}
              </p>

              <Link
                href={`/course/${course._id}`}
                className="font-Poppins text-center text-[6.854px] sm:text-[11.581px] font-medium px-[13px] sm:px-[23.162px] py-[6.85px] sm:py-[11.581px] rounded-[5.875px] sm:rounded-[9.927px] bg-primary-500 text-white w-full"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );
};

export default AvailableCourses;
