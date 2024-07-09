import React from "react";
import employees from "@/assets/icons/Employees.svg";
import employers from "@/assets/icons/Employers.svg";
import connections from "@/assets/icons/Connections.svg";
import candidatesHired from "@/assets/icons/Candidates-Hired.svg";
import jobsPosted from "@/assets/icons/Jobs-Posted.svg";
import KPICard from "@/components/KPICard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-5">
        <KPICard
          image={employees}
          title="Employees"
          value="224"
          alt="employees-icon"
        />
        <KPICard
          image={employers}
          title=" Employers"
          value="224"
          alt="employers-icon"
        />
        <KPICard
          image={connections}
          title="Connections"
          value="224"
          alt="connections-icon"
        />
        <KPICard
          image={candidatesHired}
          title="Candidates Hired"
          value="224"
          alt="candidates-hired-icon"
        />
        <KPICard
          image={jobsPosted}
          title="Jobs Posted"
          value="224"
          alt="jobs-[osted-icon"
        />
      </div>
    </div>
  );
};

export default Dashboard;
