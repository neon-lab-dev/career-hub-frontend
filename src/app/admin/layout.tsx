"use client"
import React, { useState, useEffect } from 'react';
import "../globals.css";
import ScreenWarning from '@/components/ScreenWarning';
import Sidebar from '../employer/_components/Sidebar';
import Header from '../employer/_components/Header';

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
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "Employees",
      path: "/admin/employees",
    },
    {
      label: "Employers",
      path: "/admin/employers",
    },
    {
      label: "Jobs Posted",
      path: "/admin/jobs-posted",
    },
  ];
  

  return (
    <div className="flex">
      {isSmallScreen ? (
        <div className='flex justify-center w-full h-screen'>
          <ScreenWarning/>
        </div>
      ) : (
        <>
          <Sidebar navlinks={navlinks}/>
          <div className="w-full h-full">
            <Header />
            {children}
          </div>
        </>
      )}
    </div>
  );
}
