import KPICard from "@/components/KPICard";
import React from "react";
import applicationIcon from "@/assets/icons/applications.svg";
import hourglass from "@/assets/icons/hourglass.svg";
import checkCircle from "@/assets/icons/check-circle.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import Table from "@/components/Table";
import StatusLabel from "@/components/StatusLabel";
import Image from "next/image";
import menuDots from "@/assets/icons/menu-dots.svg";
import addCircle from "@/assets/icons/Add Circle.svg";
import Button from "@/components/Button";

export type Header = {
  header: string;
  accessor: keyof DataItem;
};

export type DataItem = {
  userName: string;
  appliedOn: string;
  status: "applied" | "rejected" | "hired" | "interview";
  actions: string;
};

const Dashboard = () => {
  const headers: Header[] = [
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

  const renderCustomCell = (column: Header, item: DataItem) => {
    if (column.accessor === "status") {
      return (
        <StatusLabel key="status" variant={item.status}>
          Under Review
        </StatusLabel>
      );
    }
    if (column.accessor === "actions") {
      return (
        <div key="actions">
          <Image src={menuDots} alt="menu-dots-icon" />
        </div>
      );
    }
    return item[column.accessor];
  };

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 overflow-x-auto max-w-[1050px]">
        <KPICard
          image={applicationIcon}
          title="Jobs Posted"
          value="24"
          alt="application-icon"
        />
        <KPICard
          image={hourglass}
          title="Internships Posted"
          value="10 "
          alt="application-icon"
        />
        <KPICard
          image={checkCircle}
          title="Hired"
          value="4"
          alt="application-icon"
        />
        <KPICard
          image={closeCircle}
          title="Rejected"
          value="10"
          alt="application-icon"
        />
      </div>

      <div className="flex justify-end">
        <Button
          className="flex items-center gap-[6px] max-w-[200px] justify-center"
          variant="primary"
        >
          Add New Hiring
          <Image src={addCircle} alt="addCircle" />
        </Button>
      </div>
      <Table
      className="w-full max-w-full"
        headers={headers}
        data={data}
        renderCustomCell={renderCustomCell}
      />
    </div>
  );
};

export default Dashboard;
