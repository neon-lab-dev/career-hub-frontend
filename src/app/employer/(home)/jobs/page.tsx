"use client"
import { ICONS } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Table from "../_components/Tablel";

const EmployerJobsPage = () => {
    return (
        <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
            <div className="flex justify-end">
        <Link href="/employer/add-new-hiring">
          <Button
            className="flex items-center gap-[6px] max-w-[200px] justify-center"
            variant="primary">
            Add New Hiring
            <Image src={ICONS.addCircle} alt="addCircle" />
          </Button>
        </Link>
      </div>

      {/* Display open jobs in a table */}
      <Table className="w-full max-w-full"/>
        </div>
    );
};

export default EmployerJobsPage;