"use client"

import React from 'react';
import KPICard from '@/components/KPICard';
import employees from "@/assets/icons/Employees.svg";
import EmployeesHired from "@/assets/icons/Employees Hired.svg";
import search from "@/assets/icons/Search.svg";
import Image from 'next/image';
import menuDots from "@/assets/icons/menu-dots.svg";
import download from "@/assets/icons/download.svg";
import Table from '@/components/Table';
import DownloadCSVBtn from '../_reusableComponents/DownloadCSVBtn';
import SearchInput from '../_reusableComponents/SearchInput';

export type Header = {
    header: string;
    accessor: keyof DataItem;
  };
  
  export type DataItem = {
    userName: string;
    email: string;
    phone: string;
    actions: string;
  };

const Employees = () => {

    // Table data
    const headers: Header[] = [
        { header: "Name", accessor: "userName" },
        { header: "Email ID", accessor: "email" },
        { header: "Phone Number", accessor: "phone"},
        { header: "Actions", accessor: "actions" },
      ];
    
      const data: DataItem[] = [
        {
          userName: "Rahul Sutradhar",
          email: "testmail@gmail.com",
          phone: "+91 11223344",
          actions: "edit",
        },
      ];
    
      const renderCustomCell = (column: Header, item: DataItem) => {
        if (column.accessor === "actions") {
          return (
            <div key="actions">
              <Image src={menuDots} alt="menu-dots-icon" />
            </div>
          );
        }
        return item[column.accessor];
      };


    //   Search function
    const handleSearch = (value: string) => {
        console.log(value);
      };


    return (
        <div className='bg-[#f5f6fa] p-6 flex flex-col gap-[51px]'>
            <div className="flex items-center gap-5">
      <KPICard
        image={employees}
        title="Active Employees"
        value="224"
        alt="employees-icon"
      />
      <KPICard
        image={EmployeesHired}
        title=" Employees Hired"
        value="224"
        alt="employers-icon"
      />
      </div>


      <div className='bg-white flex flex-col gap-3 pt-3'>

        <div className='flex items-center justify-between px-4'>
            {/* Search field */}
            <SearchInput placeholder="Search user" icon={search} onSearch={handleSearch} />

{/* Download CSV button */}
<DownloadCSVBtn label="Export CSV" icon={download} />
        </div>


      <Table
      className="w-full max-w-full"
        headers={headers}
        data={data}
        renderCustomCell={renderCustomCell}
      />

      
      </div>



        </div>
    );
};

export default Employees;