"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import KPICard from "@/components/KPICard";
import applicationIcon from "@/assets/icons/applications.svg";
import hourglass from "@/assets/icons/hourglass.svg";
import checkCircle from "@/assets/icons/check-circle.svg";
import closeCircle from "@/assets/icons/close-circle.svg";
import Table from "@/app/employer/(home)/dashboard/[jobId]/_components/ViewApplicaitonTable"; // Corrected import
import { useRouter } from "next/router";

const Dashboard = ({ params: { jobId } }) => {
  const [formData, setFormData] = useState({
    title: "",
    employmentType: "",
    responsibilities: "",
    description: "",
    applicationDeadline: "",
    employmentDuration: "",
    salary: "",
    requiredSkills: "",
    extraBenefits: "",
    requirements: "",
    experience: "",
    location: "",
    locationType: "",
    companyDetails: {},
    status: "",
    applicants: [],
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        if (!jobId) return; // Exit early if jobId is not available
        const response = await axios.get(
          `https://carrerhub-backend.vercel.app/api/v1/job/${jobId}`
        );
        if (response.status !== 200) {
          throw new Error(`Failed to fetch job details. Status: ${response.status}`);
        }
        const jobData = response.data.jobs;

        // Update formData with fetched job details
        setFormData({
          title: jobData.title || "",
          employmentType: jobData.employmentType || "",
          responsibilities: jobData.responsibilities || "",
          description: jobData.description || "",
          applicationDeadline: jobData.applicationDeadline || "",
          employmentDuration: jobData.employmentDuration || "",
          salary: jobData.salary || "",
          requiredSkills: jobData.requiredSkills ? jobData.requiredSkills.join(", ") : "",
          extraBenefits: jobData.extraBenefits || "",
          requirements: jobData.requirements || "",
          experience: jobData.experience || "",
          location: jobData.location || "",
          locationType: jobData.locationType || "",
          companyDetails: jobData.companyDetails || {},
          status: jobData.status || "",
          applicants: jobData.applicants || [],
        });
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-10 overflow-x-auto">
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Total Applications"
          value={formData.applicants.length}
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={hourglass}
          title="Review Pending"
          value={formData.applicants.filter(applicant => applicant.status === 'APPLIED').length}
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={checkCircle}
          title="Selected"
          value={formData.applicants.filter(applicant => applicant.status === 'HIRED').length}
          alt="application-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={closeCircle}
          title="Rejected"
          value={formData.applicants.filter(applicant => applicant.status === 'REJECTED').length}
          alt="application-icon"
        />
      </div>

      {/* Pass formData as prop to Table */}
      <Table formdata={formData} jobId={jobId} className="w-full" />
    </div>
  );
};

export default Dashboard;
