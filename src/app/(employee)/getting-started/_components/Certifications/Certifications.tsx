"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import CertificationModal from "./CertificationModal";

type TCertificationsProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
const Certifications:React.FC<TCertificationsProps> = ({
    register,
  errors,
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-5 mt-12 font-plus-jakarta-sans">
      <h1 className="registration-form-heading mb-4">Certifications</h1>
      {/* Certificate card */}
      <div className="p-5 rounded-2xl bg-white border focus:outline-none focus:border-primary-500 transition duration-300 border-neutral-300 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <h1 className="text-secondary-930 text-lg font-900">Certificate Name</h1>
                <p className="text-neutral-500 mt-1">
                  Date
                </p>
                </div>
                <div className="flex items-center gap-5">
                  <Image
                    src={ICONS.penResume}
                    alt="pen-icon"
                    className="size-5 cursor-pointer"
                  />
                  <Image
                    src={IMAGES.bin}
                    alt="trash-bin-icon"
                    className="size-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>

      <button onClick={() => setIsModalOpen(!isModalOpen)} type="button" className="flex items-center gap-[6px] text-primary-500 font-600 cursor-pointer">
        Add Details
        <Image
            src={ICONS.addCircle}
            alt="pen-icon"
            className="size-5 cursor-pointer"
          />
      </button>

      <CertificationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} register={register} errors={errors}  />
    </div>
    );
};

export default Certifications;