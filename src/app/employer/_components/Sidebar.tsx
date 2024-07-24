"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Navlink {
  label: string;
  icon?: any;
  path: string;
}

interface SidebarProps {
  navlinks: Navlink[];
}

const Sidebar: React.FC<SidebarProps> = ({navlinks}) => {
  const pathname = usePathname();


  return (
    <div className="w-[177px] pl-6 py-7 font-plus-jakarta-sans bg-white border-r border-neutral-150 h-full flex flex-col gap-16">
      <span className="text-3xl font-bold pr-6">
        <Link href="/employer">Logo</Link>
      </span>

      {/* Navlinks */}
      <div className="flex flex-col gap-3">
        {navlinks.map((navlink, index) => (
          <div key={index} className="py-2 flex items-center justify-between">
            <Link
              href="/employer/"
              className={`flex items-center gap-[6px] ${
                pathname === navlink?.path
                  ? "text-primary-500"
                  : "text-neutral-600"
              } text-sm font-600`}
            >
              {
                navlink?.icon &&
              <Image src={navlink?.icon} alt="home-icon" />
              }
              {navlink.label}
            </Link>
            {pathname === navlink?.path ? (
              <div className="w-1 h-[22px] bg-primary-500 rounded-l-[20px]"></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
