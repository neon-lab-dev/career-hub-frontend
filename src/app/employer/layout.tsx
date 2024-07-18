"use client"
import React, { useState, useEffect } from 'react';
import "../globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import ScreenWarning from '@/components/ScreenWarning';
import home from "@/assets/icons/home.svg";
import { useQuery } from '@tanstack/react-query';
import { handleEmployeeLoginService } from '@/api/authentication';

export default function EmployeeRootLayout({ children }: any) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= 1300);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navlinks = [
    {
      label: "Home",
      path: "/employer/home",
      icon: home
    },
  ];



  return (
    <div className="flex">
      {isSmallScreen ? (
        <div className='flex justify-center w-full h-screen'>
          <ScreenWarning />
        </div>
      ) : (
        <>
          <Sidebar navlinks={navlinks} />
          <div className="w-full h-full">
            <Header />
            {children}
          </div>
        </>
      )}
    </div>
  );
}
