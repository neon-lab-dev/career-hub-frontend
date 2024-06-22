import StatusCard from "@/components/StatusCard";
import React from "react";
import applicationIcon from '@/assets/icons/applications.svg';
import Table from "@/components/Table";
import StatusLabel from "@/components/StatusLabel";
import Image from "next/image";
import menuDots from '@/assets/icons/menu-dots.svg';

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

  const headers: Header[] = [
    { header: 'Company Name', accessor: 'companyName' },
    { header: 'Position', accessor: 'position' },
    { header: 'Applied on', accessor: 'appliedOn' },
    { header: 'Status', accessor: 'status' },
    { header: 'Actions', accessor: 'actions' },
  ];

  const data: DataItem[] = [
    {
      companyName: 'ABC Inc.',
      position: 'Software Engineer',
      appliedOn: '2023-05-15',
      status: 'applied',
      actions: 'edit',
    },
    {
      companyName: 'XYZ Corp.',
      position: 'Product Manager',
      appliedOn: '2023-06-01',
      status: 'rejected',
      actions: 'edit',
    },
  ];

  const renderCustomCell = (column: Header, item: DataItem) => {
    if (column.accessor === 'status') {
      return <StatusLabel key="status" variant={item.status}>{item.status}</StatusLabel>;
    }
    if (column.accessor === 'actions') {
      return (
        <div key="actions">
          <Image src={menuDots} alt="menu-dots-icon" />
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

          <div className="flex items-center justify-center gap-5">


          <StatusCard
          // icon={menuDots}
          variant="Applications"
          title="224"
          label="Total Applications"
          />


          <StatusCard
          variant="Review"
          title="210 "
          label="Review Pending"
          />
          <StatusCard
          variant="Selected"
          title="210 "
          label="Selected"
          />
          <StatusCard
          variant="Rejected"
          title="210 "
          label="Rejected"
          />
          </div>


          <Table headers={headers} data={data} renderCustomCell={renderCustomCell} />
    

  </div>
  );
};

export default Applications;
