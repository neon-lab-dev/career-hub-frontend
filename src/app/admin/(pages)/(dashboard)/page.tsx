"use client";
import React from "react";
import employees from "@/assets/icons/Employees.svg";
import employers from "@/assets/icons/Employers.svg";
import connections from "@/assets/icons/Connections.svg";
import candidatesHired from "@/assets/icons/Candidates-Hired.svg";
import jobsPosted from "@/assets/icons/Jobs-Posted.svg";
import KPICard from "@/components/KPICard";
import { useQueries, useQuery } from "@tanstack/react-query";
import { handleGetAdminStatsService } from "@/api/admin";

const Dashboard = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["adminStats"],
    queryFn: handleGetAdminStatsService,
  });
  return (
    <div className="p-6">
      <div className="flex items-center gap-5">
        <KPICard
          image={employees}
          title="Employees"
          value={isLoading ? "..." : data?.employeesCount ?? 0}
          alt="employees-icon"
        />
        <KPICard
          image={employers}
          title=" Employers"
          value={isLoading ? "..." : data?.employersCount ?? 0}
          alt="employers-icon"
        />
        <KPICard
          image={candidatesHired}
          title="Candidates Hired"
          value={isLoading ? "..." : data?.hiredApplicantsCount ?? 0}
          alt="candidates-hired-icon"
        />
        <KPICard
          image={jobsPosted}
          title="Jobs Posted"
          value={isLoading ? "..." : data?.jobsCount ?? 0}
          alt="jobs-[osted-icon"
        />
      </div>
    </div>
  );
};

export default Dashboard;
