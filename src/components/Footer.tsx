import Link from "next/link";
import React from "react";

const Footer = () => {
  // Define the array of other links
  const otherLinks = [
    "About us",
    "Contact us",
    "Privacy Policy",
    "Terms of Use",
    "Refund Policy",
  ];
  return (
    <div className="bg-secondary-900">
      <div className="py-10 max-width m-auto">
        <div className="flex justify-between max-lg:flex-col mx-[40px] max-lg:mx-10  max-lg:gap-12 ">
          <div className="w-[400px] max-lg:w-[250px] flex flex-col gap-4 text-white">
            <span className="font-bold text-5xl">Logo</span>
            <p className="text-[20px] max-lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Accumsan sed dolor
              scelerisque massa amet convallis bibendum. Feugiat egestas euismod
              feugiat scelerisque aliquet. At porttitor viverra sapien.
            </p>
          </div>
          <div className="flex flex-col gap-1 font-poppins">
            <span className="text-white font-semibold text-[22px]">
              Other Links
            </span>
            <ul className="text-secondary-400 text-[22px] font-semibold flex flex-col gap-2">
              {/* Using map to render other links */}
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link href={""}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 font-Poppins">
            <span className="text-white font-semibold text-[22px]">
              Other Links
            </span>
            <ul className="text-secondary-400 text-[22px] font-semibold flex flex-col gap-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link href={""}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col mx-[50px] my-10">
          <div className="bg-secondary-700 h-[2px]" />
        </div>
        <div className="flex flex-col mx-[50px] my-10">
          <span className="text-[20px] text-white max-lg:text-center max-lg:text-[15px]">
            Lorem ipsum dolor sit amet consectetu
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
