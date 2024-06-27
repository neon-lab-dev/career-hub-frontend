import React from 'react';
import { IMAGES } from "@/assets";
import Image from "next/image";

interface GetStartedLayoutProps {
  children: React.ReactNode; // Define the type for children
  progress: number; // Define the type for progress (assuming it's a number)
  goToPreviousStep: () => void; // Define the type for goToPreviousStep (assuming it's a function that returns void)
}
const GetStartedLayout: React.FC<GetStartedLayoutProps> = ({ children, progress, goToPreviousStep }) => {
  return (
    <div className="bg-[#F5F6FA] w-full p-6 max-sm:p-1">
      <div className="bg-white pt-10 mb-10 rounded-2xl mx-32 max-lg:mx-2 max-md:mx-0.8 h-[600px] max-lg:h-full">
        <div className="flex justify-center items-center gap-4 max-lg:gap-0 max-md:gap-1 max-lg:mx-6 max-md:mx-4">
          <Image src={IMAGES.arrow} alt="" onClick={goToPreviousStep} className=' max-md:w-6 ' />
          <progress className="progress progress-error w-[700px]  h-[15px] transition-transform duration-300 " value={progress} max="100"></progress>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GetStartedLayout;
