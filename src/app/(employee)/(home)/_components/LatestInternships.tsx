import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import { getLatestInternships } from "@/api/jobs";
import Link from "next/link";
import React from "react";
import InternshipCard from "./InternshipCard";
import NoDataFound from "@/components/NoDataFound";

const LatestInternships = async () => {
  const internships = await getLatestInternships();
  return (
    <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left">
        <span className="highlight">
          Latest internships
          <br className="xl:hidden" />
        </span>{" "}
        For You
      </h3>
      {
        internships?.length < 1 ?
        <NoDataFound message="No Internship Found" /> :
        <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {internships.map((details, index) => (
            <div key={index} className="carousel-item">
              <InternshipCard
                wrapperClassName=""
                job={details}
                
              />
            </div>
          ))}
        </div>
      </div>
      }
      <Link href="/internships">
        <Button variant="normal" className="px-9 py-4">
          View all openings
        </Button>
      </Link>
    </div>
  );
};

export default LatestInternships;
