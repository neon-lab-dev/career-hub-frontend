import React from 'react';
import Image from 'next/image';

type cardProp = {
  image: string;
  value: number | string;
  title: string;
  alt: string;
};

const KPICard: React.FC<cardProp> = ({ image, alt, value, title }) => {
  return (
    <div className="p-4 flex items-center w-[17.25rem] h-[5.5625rem] bg-[#ffffff] rounded-[0.875rem] gap-4">
      <div className="h-[3rem] w-[3rem] border border-primary-100 bg-primary-50 rounded-full flex justify-center items-center">
        <Image
          src={image}
          alt={alt}
          height={20}
          width={20}
          className="h-[1.25rem] w-[1.25rem]"
        />
      </div>
      <div>
        <p className="h-[1.875rem] font-[700] font-plus-jakarta-sans text-[1.5rem] text-secondary-900">
          {value}
        </p>
        <p className="h-[1.4375rem] capitalize font-[500] text-[1.125rem] leading-[22.68px] text-secondary-400 pt-[2px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default KPICard;
