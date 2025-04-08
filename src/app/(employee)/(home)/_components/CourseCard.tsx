import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="bg-white p-6 w-full max-w-[446px] rounded-3xl border border-neutral-300 shadow-job-card-shadow font-plus-jakarta-sans flex flex-col gap-6">
      <Image src={IMAGES.courseImg} alt="" className="" />
      {/* Course Name */}
      <h1 className="text-neutral-900 text-[28px] font-800 ">
        Creative Maven Pack
      </h1>

      {/* Course includes */}
      <div>
        <h2 className="text-neutral-980 text-2xl font-600 ">This Includes:</h2>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-[7px]">
            <Image
              src={ICONS.rightArrowCourse}
              alt="right-pointer-arrow-icon"
              className="size-[21px]"
            />
            <p className="text-neutral-990 text-[21px] capatalize">
              Adobe Illustrator
            </p>
          </div>
        </div>
      </div>

      {/* Course Price */}
      <div className="flex items-center gap-[15px]">
        <div className="flex items-center gap-3">
          <h1 className="text-primary-500 text-[36px] font-800">₹1,499</h1>
          <p className="text-neutral-990 text-lg line-through">₹2,796</p>
        </div>
        <p className="text-success-110 text-lg font-600">You save ₹12976</p>
      </div>

      {/* hr */}
      <hr className="w-full border border-neutral-100 h-[3px]" />

      <button className="bg-white px-9 py-[15px] rounded-lg border border-neutral-200 shadow-job-card-shadow text-neutral-600 font-600 leading-6 text-xl">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
