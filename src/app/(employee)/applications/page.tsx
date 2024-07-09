// @ts-nocheck
"use client";

import StatusCard from "@/components/StatusCard";
import React, { useState, useEffect } from "react";
import applicationIcon from "@/assets/icons/applications.svg";
import Table from "@/components/Table";
import StatusLabel from "@/components/StatusLabel";
import Image from "next/image";
import menuDots from "@/assets/icons/menu-dots.svg";
import api from "@/api";
import axios from "axios";

export type Header = {
  header: string;
  accessor: keyof DataItem; // Ensure accessor is a key of DataItem
};

export type DataItem = {
  companyName: string;
  position: string;
  appliedOn: string;
  status: "applied" | "rejected" | "hired" | "interview";
  actions: string;
};

const Applications = () => {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    fetchJobApplications();
  }, []);

  const fetchJobApplications = async () => {
    try {
      const response = await axios.get(api.getEmployeeApplications, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.data);
      const applicationsData = response.data.jobs.map((job: any) => ({
        companyName: job.companyDetails.companyName,
        position: job.title,
        appliedOn: 0,
        status: "Applied",
        actions: "edit",
      }));

      setJobApplications(applicationsData);
    } catch (error) {
      console.error("Error", error);
    }
  };

  console.log(jobApplications);

  const headers: Header[] = [
    { header: "Company Name", accessor: "companyName" },
    { header: "Position", accessor: "position" },
    { header: "Applied on", accessor: "appliedOn" },
    { header: "Status", accessor: "status" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderCustomCell = (column: Header, item: DataItem) => {
    if (column.accessor === "status") {
      return (
        <StatusLabel key="status" variant={item.status.toLocaleLowerCase()}>
          {item.status}
        </StatusLabel>
      );
    }
    if (column.accessor === "actions") {
      return (
        <div key="actions">
          <div className="dropdown relative">
            <Image
              tabIndex={0}
              role="button"
              src={menuDots}
              alt="menu-dots-icon"
              className="cursor-pointer"
            />
            <ul
              tabIndex={0}
              className="menu dropdown-content right-0 flex flex-col gap-3 bg-white z-[1] w-[220px] absolute shadow rounded-xl p-4"
            >
              <li>
                <a>View Application</a>
              </li>
              <li>
                <a>Withdraw Application</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return item[column.accessor];
  };

  return (
    <div className="bg-neutral-100 py-16 flex flex-col gap-[51px]">
      <div>
        <h1 className=" text-secondary-800 text-[28px] font-700 text-center">
          Your
          <span className="bg-primary-500 px-2 text-white ml-3">
            Applications
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-start lg:justify-center gap-5 overflow-x-scroll w-full px-4 md:px-0">
        <StatusCard
          // icon={menuDots}
          variant="Applications"
          title={jobApplications.length}
          label="Total Applications"
        />

        <StatusCard variant="Review" title="0" label="Resume Viewed" />
        <StatusCard variant="Selected" title="0 " label="Selected" />
        <StatusCard variant="Rejected" title="0 " label="Rejected" />
      </div>

      <Table
        headers={headers}
        data={jobApplications}
        renderCustomCell={renderCustomCell}
      />
    </div>
  );
};

export default Applications;
