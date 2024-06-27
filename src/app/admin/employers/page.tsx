"use client"

import React from 'react';
import KPICard from '@/components/KPICard';
import employees from "@/assets/icons/Employees.svg";
import search from "@/assets/icons/Search.svg";
import Image from 'next/image';
import menuDots from "@/assets/icons/menu-dots.svg";
import download from "@/assets/icons/download.svg";
import Table from '@/components/Table';
import DownloadCSVBtn from '../_reusableComponents/DownloadCSVBtn';
import SearchInput from '../_reusableComponents/SearchInput';
import { Header } from '../tableTypes';
  
  export type DataItem = {
    userName: string;
    email: string;
    companyName: string;
    listingsPosted: string;
    actions: string;
  };

const Employers = () => {

    // Table data
    const headers: Header<DataItem>[] = [
        { header: "Name", accessor: "userName" },
        { header: "Email ID", accessor: "email" },
        { header: "Company Name", accessor: "companyName"},
        { header: "Listings Posted", accessor: "listingsPosted"},
        { header: "Actions", accessor: "actions" },
      ];
    
      const data: DataItem[] = [
        {
          userName: "Rahul Sutradhar",
          email: "testmail@gmail.com",
          companyName: "Google LLC",
          listingsPosted: "3",
          actions: "edit",
        },
      ];
    
      const renderCustomCell = (column: Header<DataItem>, item: DataItem) => {
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

export default Employers;