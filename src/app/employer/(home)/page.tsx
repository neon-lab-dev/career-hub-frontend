"use client";
import KPICard from "@/components/KPICard";
import React, { useEffect, useState } from "react";
import applicationIcon from "@/assets/icons/applications.svg";
import hourglass from "@/assets/icons/hourglass.svg";
import checkCircle from "@/assets/icons/check-circle.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import Image from "next/image";
import addCircle from "@/assets/icons/Add Circle.svg";
import Button from "@/components/Button";
import Tablel from "./_components/Tablel"; // Ensure correct import path
import Link from "next/link";

export type JobItem = {
  title: string;
  status: string;
};

const Dashboard = () => {
  const [jobsCount, setJobsCount] = useState<number>(0);
  const [internshipsPosted, setInternshipsPosted] = useState<number>(0);
  const [internshipsHired, setInternshipsHired] = useState<number>(0);
  const [internshipsRejected, setInternshipsRejected] = useState<number>(0);
  const [openJobs, setOpenJobs] = useState<JobItem[]>([]);

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = async () => {
    try {
      const response = await fetch('https://carrerhub-backend.vercel.app/api/v1/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Update state with fetched data
      setJobsCount(data.jobsCount || 0);
      
      // Count internships posted, hired, and rejected
      let internshipsPostedCount = 0;
      let internshipsHiredCount = 0;
      let internshipsRejectedCount = 0;

      data.jobs.forEach((job: any) => { // Replace `any` with actual type if known
        if (job.employmentType === "Internship") {
          internshipsPostedCount++;
          job.applicants.forEach((applicant: any) => { // Replace `any` with actual type if known
            if (applicant.status === "hired") {
              internshipsHiredCount++;
            } else if (applicant.status === "rejected") {
              internshipsRejectedCount++;
            }
          });
        }
      });

      setInternshipsPosted(internshipsPostedCount);
      setInternshipsHired(internshipsHiredCount);
      setInternshipsRejected(internshipsRejectedCount);

      // Filter open jobs
      setOpenJobs(data.jobs.filter((job: any) => job.status === "Open").map((job: any) => ({
        title: job.title,
        status: job.status
      })));
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 overflow-x-auto">
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Jobs Posted"
          value={jobsCount - internshipsPosted}
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={hourglass}
          title="Internships Posted"
          value={internshipsPosted}
          alt="hourglass-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={checkCircle}
          title="Internships Hired"
          value={internshipsHired}
          alt="check-circle-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={closeCircle}
          title="Internships Rejected"
          value={internshipsRejected}
          alt="close-circle-icon"
        />
      </div>

      <div className="flex justify-end">
        <Link href="/employer/add-new-hiring">
          <Button
            className="flex items-center gap-[6px] max-w-[200px] justify-center"
            variant="primary"
          >
            Add New Hiring
            <Image src={addCircle} alt="addCircle" />
          </Button>
        </Link>
      </div>

      {/* Display open jobs in a table */}
      <Tablel
        className="w-full max-w-full"
      />
    </div>
  );
};

export default Dashboard;
