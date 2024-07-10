import KPICard from "@/components/KPICard";
import React from "react";
import applicationIcon from "@/assets/icons/applications.svg";
import hourglass from "@/assets/icons/hourglass.svg";
import checkCircle from "@/assets/icons/check-circle.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import Image from "next/image";
import addCircle from "@/assets/icons/Add Circle.svg";
import Button from "@/components/Button";
import { Header } from "@/app/admin/tableTypes";
import Tablel from "./_components/Tablel";
import Link from "next/link";

export type DataItem = {
  userName: string;
  appliedOn: string;
  status: "applied" | "rejected" | "hired" | "interview";
  actions: string;
};

const Dashboard = () => {
  const headers: Header<DataItem>[] = [
    { header: "Name", accessor: "userName" },
    { header: "Applied on", accessor: "appliedOn" },
    { header: "Status", accessor: "status" },
    { header: "Actions", accessor: "actions" },
  ];

  const data: DataItem[] = [
    {
      userName: "Rahul Sutradhar",
      appliedOn: "12 Dec 2024 - 11AM",
      status: "applied",
      actions: "edit",
    },
    {
      userName: "Rahul Sutradhar",
      appliedOn: "12 Dec 2024 - 11AM",
      status: "applied",
      actions: "edit",
    },
    {
      userName: "Rahul Sutradhar",
      appliedOn: "12 Dec 2024 - 11AM",
      status: "applied",
      actions: "edit",
    },
    {
      userName: "Rahul Sutradhar",
      appliedOn: "12 Dec 2024 - 11AM",
      status: "applied",
      actions: "edit",
    },
  ];


  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 overflow-x-auto ">
        <KPICard
        classNames="w-full max-w-full"
          image={applicationIcon}
          title="Jobs Posted"
          value="24"
          alt="application-icon"
        />
        <KPICard
        classNames="w-full max-w-full"
          image={hourglass}
          title="Internships Posted"
          value="10 "
          alt="application-icon"
        />
        <KPICard
        classNames="w-full max-w-full"
          image={checkCircle}
          title="Hired"
          value="4"
          alt="application-icon"
        />
        <KPICard
        classNames="w-full max-w-full"
          image={closeCircle}
          title="Rejected"
          value="10"
          alt="application-icon"
        />
      </div>

      <div className="flex justify-end">
        <Link href="/employer/home/add-new-hiring">
        <Button
          className="flex items-center gap-[6px] max-w-[200px] justify-center"
          variant="primary"
        >
          Add New Hiring
          <Image src={addCircle} alt="addCircle" />
        </Button>
        </Link>
      </div>

      <Tablel
      className="w-full max-w-full"
      />
    </div>
  );
};

export default Dashboard;
