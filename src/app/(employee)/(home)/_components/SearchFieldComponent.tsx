import React from "react";
import searchIcon from "@/assets/icons/search-icon.svg";
import Image from "next/image";
import locationIcon from "@/assets/icons/location.svg";

const SearchFieldComponent = () => {
  return (
    <>
      <div className="w-[749px] mt-6 mx-auto flex justify-between border-[1.25px] border-primary-500 rounded-[100px] p-4 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-[55px] h-[55px] bg-primary-500 rounded-full flex justify-center items-center">
            <Image src={searchIcon} alt="search-icon" className="w-[30px]" />
          </div>
          <input
            type="text"
            className="focus:outline-none"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="w-[205px] px-5 py-[15px] bg-neutral-100 rounded-[125px] flex items-center gap-1 cursor-pointer">
          <Image src={locationIcon} alt="location-icon" />
          <span className="font-plus-jakarta-sans text-xl text-neutral-700 font-normal">
            Any Location
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchFieldComponent;
