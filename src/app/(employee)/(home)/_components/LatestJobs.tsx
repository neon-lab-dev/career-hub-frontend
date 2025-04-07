"use client";

import Button from "@/components/Button";
import JobDetailCard from "@/components/JobDetailCard";
import { getLatestJobs } from "@/api/jobs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getLatestJobs();
      setJobs(res || []);
    };
    fetchJobs();
  }, []);

  if (!jobs || jobs.length === 0) return null;

  return (
    <div className="py-section flex flex-col items-center justify-center gap-14 wrapper">
      <h3 className="section-heading text-center xl:text-left">
        <span className="highlight">
          Latest Jobs
          <br className="xl:hidden" />
        </span>{" "}
        You Might Like
      </h3>

      <div className="">
        <Swiper
          spaceBetween={24}
          slidesPerView={3.2}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {jobs.map((job: any, index: number) => (
            <SwiperSlide key={index} className="!w-auto ">
              <JobDetailCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/jobs">
        <Button variant="outline" className="px-12 py-5">
          View all openings
        </Button>
      </Link>
    </div>
  );
};

export default LatestJobs;
