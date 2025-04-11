"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";


const RegistrationFormModal = ({isModalOpen, setIsModalOpen}) => {
 
  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] bg-[#fff] rounded-lg p-4 transition-all duration-300`}
      >
        <div className="w-full flex items-end justify-end">
          <Image
            src={IMAGES.close}
            alt="cross-icon"
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="text-[#2cac9f] text-[2rem] font-[500]">Success!</h2>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormModal;
