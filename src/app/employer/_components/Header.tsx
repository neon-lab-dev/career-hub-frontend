"use client";
import React from "react";
// import profileImg from "@/assets/icons/profileImg.svg";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const getTitle = (path: string) => {
    const knownPrefixes = ['/admin/', '/employer/'];
    let title = path;
    knownPrefixes.forEach(prefix => {
      if (title.startsWith(prefix)) {
        title = title.replace(prefix, '');
      }
    });
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const title = getTitle(pathname);
  
  // Dropdown items
  const dropdownItems = [
    {
      label: "Profile",
      path: "",
    },
    {
      label: "Setting",
      path: "",
    },
    {
      label: "Others",
      path: "",
    },
  ];
  return (
    <div className="bg-white px-7 py-4 font-plus-jakarta-sans flex justify-between items-center">
      {/* Heading */}
      <h1 className="text-2xl font-700 text-secondary-900">{title}</h1>

      {/* Profile Dropdown */}
      <div
        tabIndex={0}
        role="button"
        className="dropdown bg-white border border-secondary-100 rounded-xl p-3 relative"
      >
        <div className="flex justify-between gap-1 items-center">
          <div className="flex items-center gap-[6px]">
            {/* Profile image */}
            <div className="w-8 h-8 rounded-full">
              <Image src={IMAGES.profile} alt="user-profile-img" />
            </div>

            {/* User name */}
            <p className="text-neutral-975 text-base font-500 ">
              Rahul Sutradhar
            </p>
          </div>

          {/* Dropdown icon/arrow */}
          <Image src={IMAGES.down} alt="arrow-down" />
        </div>

        {/* Dropdown Menues */}
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded z-[1] w-48 p-2 shadow absolute top-14 flex flex-col gap-4"
        >
          {dropdownItems.map((item, index) => (
            <Link key={index} href={`/${item.path}`}>
              {item.label}
            </Link>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Header;
