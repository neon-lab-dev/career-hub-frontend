"use client";

import Link from "next/link";
import React from "react";
import home from "../../../assets/icons/home.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[177px] pl-6 py-7 font-plus-jakarta-sans bg-white border-r border-neutral-150 h-full flex flex-col gap-16">
      <span className="text-3xl font-bold pr-6">
        <Link href="/">Logo</Link>
      </span>

      <div className="py-2 flex items-center justify-between">
        <Link
          href={""}
          className={`flex items-center gap-[6px] ${
            pathname === "/employer/dashboard"
              ? "text-primary-500"
              : "text-neutral-600"
          } text-sm font-500`}
        >
          <Image src={home} alt="home-icon" />
          Home
        </Link>
        {pathname === "/employer/dashboard" ? (
          <div className="w-1 h-[22px] bg-primary-500 rounded-l-[20px]"></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidebar;
