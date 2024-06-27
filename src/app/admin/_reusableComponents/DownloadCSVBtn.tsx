import React from "react";
import Image, { StaticImageData } from "next/image";

interface DownloadCSVBtnProps {
  label: string;
  icon: StaticImageData;
}

const DownloadCSVBtn: React.FC<DownloadCSVBtnProps> = ({ label, icon }) => {
  return (
    <div>
      <button className="bg-neutral-450 border border-neutral-550 rounded-[10px] font-plus-jakarta-sans text-base font-500 text-secondary-925 flex items-center gap-2 px-4 pt-3 pb-[14px]">
        {label}
        <Image src={icon} alt="button-icon" className="w-[18px]" />
      </button>
    </div>
  );
};

export default DownloadCSVBtn;