"use client";
// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";
import NotFound from "@/components/NotFound";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";
import ApplyFilter from "../_components/ApplyFilter";
import { ICONS } from "@/assets";
import Image from "next/image";
import JobDetailCard from "@/components/JobDetailCard";
import api from "@/api";
import JobCardLoader from "@/components/Loaders/JobCardLoader";

type Props = {
  params: {
    jobType: string;
  };
};

const Page = ({ params: { jobType } }: Props) => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(jobs);
  console.log(searchResult);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(api.jobs);
        setJobs(response.data.jobs);
        setSearchResult(response.data.jobs);
      } catch (err) {
        console.error(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    if (!normalizedSearchTerm) {
      setSearchResult(jobs);
      return;
    }

    const searchWords = normalizedSearchTerm.split(" ");

    setSearchResult(
      jobs.filter((job) => {
        // @ts-ignore
        const jobTitleWords = job.title
          .toLowerCase()
          .trim()
          .split(/[\s-]+/);
        return searchWords.every((word) =>
          // @ts-ignore
          jobTitleWords.some((jobWord) => jobWord.includes(word))
        );
      })
    );
  };

  return (
    <div className="wrapper bg-[#f5f6fa] py-6">
      <div className="flex justify-between gap-10">
        <ApplyFilter />
        <div className="flex flex-1 flex-col gap-9">
          {/* Search field */}
          <div className="bg-white rounded-[10px] w-full p-4 flex gap-2 justify-between items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search by Internship Title / Skills"
              className="bg-white focus:outline-none w-full"
            />
            <Image
              onClick={handleSearch}
              src={ICONS.magnifer}
              alt="search-icon"
              className="w-[18px] cursor-pointer"
            />
          </div>

          {/* Job cards */}
          {loading ? (
            <JobCardLoader />
          ) : (
            searchResult.map((details: any, index: number) => (
              <JobDetailCard
                wrapperClassName=""
                key={index}
                job={details}
                showApplyButton
              />
            ))
          )}

          {searchResult.map((details: any, index: number) => (
            <JobDetailCard
              wrapperClassName=""
              key={index}
              job={details}
              showApplyButton
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
