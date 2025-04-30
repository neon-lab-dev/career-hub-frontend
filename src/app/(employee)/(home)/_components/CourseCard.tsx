"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

type TCourseCardProps = {
  name: string;
  thumbnail: { url: string };
  description: string;
  href?: string;
};

const CourseCard: React.FC<TCourseCardProps> = ({
  name,
  thumbnail,
  description,
  href,
}) => {
  return (
    <div
      className={`bg-white w-full max-w-[350px] h-[355px] rounded-3xl border border-neutral-300 shadow-job-card-shadow font-plus-jakarta-sans flex flex-col cursor-pointer relative group overflow-hidden`}
    >
      <div className="relative w-full max-h-[207px] h-[207px] rounded-t-3xl overflow-hidden">
        <Image
          src={thumbnail?.url ? thumbnail?.url : IMAGES.courseImg}
          alt=""
          fill
          className="object-cover rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="px-3 py-2 text-secondary-600 font-500 text-sm bg-neutral-450 w-fit rounded-md">
            For All Levels
          </div>
          <h1 className="text-success-100 text-xl font-600">Free</h1>
        </div>
        {/* Course Name */}
        <h1 className="text-neutral-600 text-lg font-700 mt-4 leading-7">
          {name}
        </h1>

        {/* Student and lesson */}
        {/* 
        <div className="flex items-center gap-5 mt-4 text-neutral-600 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={ICONS.student}
              alt="student | Medhrplus"
              className="size-6"
            />
            <p>289 Students</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={ICONS.lesson}
              alt="lesson | Medhrplus"
              className="size-6"
            />
            <p>20 Lessons</p>
          </div>
        </div> */}
      </div>

      {/* Hover card */}
      <div className="flex flex-col bg-neutral-450 rounded-3xl absolute bottom-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-[600ms] overflow-hidden p-5">
        <div className="flex items-center gap-3">
          <div className="px-3 py-2 text-secondary-600 font-500 text-sm bg-white w-fit rounded-md translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
            For All Levels
          </div>
          <h1 className="text-success-100 text-xl font-600 translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            Free
          </h1>
        </div>

        <h1 className="text-neutral-600 text-lg font-700 mt-4 leading-7">
          {name}
        </h1>

        {/* <div className="flex items-center gap-5 mt-4 text-neutral-600 text-sm">
          <div className="flex items-center gap-2 translate-y-[-100px] group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
            <Image
              src={ICONS.student}
              alt="student | Medhrplus"
              className="size-6"
            />
            <p>289 Students</p>
          </div>
          <div className="flex items-center gap-2 translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
            <Image
              src={ICONS.lesson}
              alt="lesson | Medhrplus"
              className="size-6"
            />
            <p>20 Lessons</p>
          </div>
        </div> */}

        <p className="text-neutral-400 text-[15px] mt-6 translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
          {description?.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>

        <Link href={href ? href : ""}>
          <Button variant="normal" className="px-6 py-[10px] w-fit mt-7">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
