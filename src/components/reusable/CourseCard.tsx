import React from "react";

import techLogo from "../../assets/images/tech-logo.png";

import tickBlue from "../../assets/icons/tick-blue.svg";
import tickWhite from "../../assets/icons/tick-mark-white.svg";
import Image from "next/image";
import { TCourseDetails } from "@/app/(employee)/(home)/page";

type CourseProps = {
  courseDetails: TCourseDetails;
  variant: "A" | "B";
};

const CourseCard: React.FC<CourseProps> = ({ courseDetails, variant }) => {
  return (
    <div>
      <div
        className={` ${
          variant === "A"
            ? "bg-courseCard-gradient-blue"
            : "bg-courseCard-gradient-white"
        } w-[590.55px] max-h-[324px] rounded-[33.089px] card-border flex relative`}
      >
        <div className="flex flex-col gap-[10px] p-[22px]">
          <Image
            src={courseDetails.logo}
            alt="search-icon"
            className="w-[62.042px]"
          />

          {variant === "A" ? (
            <h1
              className={`font-Poppins font-semibold text-[33.089px] leading-[34.743px] -tracking-wide   ${
                variant === "A" ? "text-white" : "text-secondary-575"
              } capitalize`}
            >
              Pay After{" "}
              <span
                className={`${
                  variant === "A" ? "text-warning-50" : "text-secondary-575"
                }`}
              >
                Placement
              </span>{" "}
              <br />
              Program!
            </h1>

            

            
          ) : (
            <h1
              className={`font-Poppins font-semibold text-[33.089px] leading-[34.743px] -tracking-wide   text-secondary-575 capitalize`}
            >
              {/* Full Stack Development */}
              {
                courseDetails.title.length >= 22 ? 
                <span className="w-[324px]">{courseDetails.title}</span>
                : 
                <span>{courseDetails.title}</span>
              }
            </h1>
          )}

          <Image
            src={techLogo}
            alt="search-icon"
            className={`${variant === "A" ? "hidden" : "block"}`}
          />

          <hr
            style={{
              borderColor:
                variant === "A"
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(89, 90, 97, 0.15)",
            }}
            className="h-[1.654px] my-3"
          />

          <div className="flex flex-col gap-[9px]">
            {courseDetails?.features?.map((feature, index: any) => (
              <div key={index} className="flex items-center gap-[5px]">
                <div
                  className={` ${
                    variant === "A" ? "bg-warning-50" : "bg-secondary-575"
                  }  w-[19.853px] h-[19.853px] rounded-full flex justify-center items-center`}
                >
                  <Image
                    src={variant === "A" ? tickBlue : tickWhite}
                    alt="tick-mark"
                    className="w-[9.927px]"
                  />
                </div>
                <p
                  className={`font-Poppins font-normal text-[13.236px] ${
                    variant === "A" ? "text-white" : "text-neutral-925"
                  } leading-[13.897px] tracking-tight`}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <button
            className={` ${
              variant === "A"
                ? "bg-white text-secondary-550"
                : "bg-secondary-525 text-white"
            } font-Poppins text-[11.581px] font-medium  px-[23.162px] py-[11.581px] rounded-[9.927px] max-w-[120px] mt-2`}
          >
            View Details
          </button>
        </div>

        {/* <div className='w-full '> */}
        <Image
          src={courseDetails?.image}
          alt="student1"
          className="absolute right-0 bottom-0 "
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
