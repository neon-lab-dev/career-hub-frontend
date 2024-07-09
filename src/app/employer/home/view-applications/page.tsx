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
import Link from "next/link";
import Tablel from "@/app/employer/home/view-applications/_components/ViewApplicaitonTable";


const Dashboard = () => {
  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-10 overflow-x-auto ">
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Total  Applications"
          value="24"
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={hourglass}
          title="Review Pending"
          value="10 "
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={checkCircle}
          title="Selected"
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

      <Tablel
       className="w-full max-w-full"
      />
    </div>
  );
};

export default Dashboard;
