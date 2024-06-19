import React from 'react';
import { IMAGES } from "@/assets";
import Image from "next/image";

const GetStartedLayout = ({ children, progress, goToPreviousStep }) => {
  return (
    <div className="bg-[#F5F6FA] w-full p-6">
      <div className="bg-white pt-10 mb-10 rounded-2xl mx-32 h-[600px]">
        <div className="flex justify-center items-center gap-4">
          <Image src={IMAGES.arrow} alt="" onClick={goToPreviousStep} />
          <progress className="progress progress-error w-[700px] h-[15px] transition-transform duration-300" value={progress} max="100"></progress>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GetStartedLayout;
