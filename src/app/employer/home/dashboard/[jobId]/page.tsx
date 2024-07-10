"use client"
import KPICard from "@/components/KPICard";
import React, { useEffect, useState } from "react";
import applicationIcon from "@/assets/icons/applications.svg";
import hourglass from "@/assets/icons/hourglass.svg";
import checkCircle from "@/assets/icons/check-circle.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import Table from "@/app/employer/home/dashboard/[jobId]/_components/ViewApplicaitonTable"; // Corrected import
import axios from "axios";
import { useRouter } from "next/router";

const Dashboard = ({ jobId }: { jobId: string }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    requiredSkills: "",
    responsibilities: "",
    locationType: "",
    location: "",
    employmentType: "",
    employmentDuration: "",
    salary: "",
    applicationDeadline: "",
    extraBenefits: "",
    experience: "",
  });



  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `https://carrerhub-backend.vercel.app/api/v1/job/${jobId}`
        );
        console.log("Job details response:", response.data);
        setFormData(response.data.job || {});
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-10 overflow-x-auto">
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Total Applications"
          value="24"
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={hourglass}
          title="Review Pending"
          value="10"
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

      {/* Pass formData as prop to Table */}
      <Table jobDetails={formData} className="w-full" />
    </div>
  );
};

export default Dashboard;
