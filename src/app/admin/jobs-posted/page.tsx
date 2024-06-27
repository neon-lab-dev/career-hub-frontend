"use client"
import React from 'react';
import KPICard from '@/components/KPICard';
import employees from "@/assets/icons/Employees.svg";
import search from "@/assets/icons/Search.svg";
import Image from 'next/image';
import menuDots from "@/assets/icons/menu-dots.svg";
import download from "@/assets/icons/download.svg";
import applications from "@/assets/icons/applications.svg";
import jobPosted from "@/assets/icons/Jobs-Posted.svg";
import Table from '@/components/Table';
import DownloadCSVBtn from '../_reusableComponents/DownloadCSVBtn';
import SearchInput from '../_reusableComponents/SearchInput';

export type Header = {
    header: string;
    accessor: keyof DataItem;
  };
  
  export type DataItem = {
    jobTitle: string;
    companyName: string;
    jobType: string;
    postedDate: string;
    actions: string;
  };

const Employers = () => {

    // Table data
    const headers: Header[] = [
        { header: "Job Title", accessor: "jobTitle" },
        { header: "Company Name", accessor: "companyName"},
        { header: "Job Type", accessor: "jobType" },
        { header: "Posted Date", accessor: "postedDate"},
        { header: "Actions", accessor: "actions" },
      ];
    
      const data: DataItem[] = [
        {
            jobTitle: "Rahul Sutradhar",
            companyName: "Google LLC",
            jobType: "Job",
            postedDate: "12 Dec 2024 - 11AM",
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
      classNames="w-full max-w-full"
        image={jobPosted}
        title="Total Opportunities"
        value="224"
        alt="employees-icon"
      />
      <KPICard
      classNames="w-full max-w-full"
        image={applications}
        title="Jobss"
        value="224"
        alt="employees-icon"
      />
      <KPICard
      classNames="w-full max-w-full"
        image={applications}
        title="Internships"
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