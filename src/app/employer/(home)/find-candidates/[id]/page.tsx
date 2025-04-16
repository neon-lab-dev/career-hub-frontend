"use client"
import { useQuery } from "@tanstack/react-query";
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import { handleGEtEmployerByIdForEmployer } from "@/api/employer";
import Image from "next/image";
import { ICONS } from "@/assets";
import EducationDetails from "../_components/EducationDetails";
import ProjectDetails from "../_components/ProjectDetails";
import WorkExperience from "../_components/WorkExperience";
import Certification from "../_components/Certification";
import Skills from "../_components/Skills";
import Button from "@/components/Button";
import Link from "next/link";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>; // params is now a Promise
};

const EmployeeProfileDetails = ({ params }: Props) => {
  const { id } = use(params);
    const { isLoading, data } = useQuery({
        queryKey: ["employer", "employee", id],
        queryFn: () => handleGEtEmployerByIdForEmployer(id),
      });
      console.log(data);
      if (isLoading) return <Loading className="h-[60vh] w-full" />;
      if (!data) return <NotFound />;
    return (
      <div className="bg-[#f5f6fa] p-7 font-plus-jakarta-sans">
      {/* {data?.full_name} */}
      <div className="bg-white border border-[#EEEEF0] p-9 rounded-3xl max-w-[1100px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href={"/employer/find-candidates"}>
              <Image
                src={ICONS.leftArrow}
                alt="left-arrow"
                className="size-10"
              />
            </Link>
            <h1 className="text-[28px] font-700 text-[#25252C]">
              Candidate
            </h1>
          </div>
          <Button
            variant="normal"
            className="px-4 py-3 flex items-center gap-1"
          >
            Send Message
            <Image src={ICONS.sendArrow} alt="send-arrow" className="size-5" />
          </Button>
        </div>

        <div className="bg-[#EAECF4] border border-[#EEEEF0] rounded-3xl p-8 flex items-center justify-between mt-12 mb-6">
          {/* Img and name */}
          <div className="flex items-center gap-[10px]">
            <div className="size-[59px] rounded-full border-2 border-[#F7F7F8] flex items-center justify-center">
              <Image
                src={ICONS.leftArrow}
                alt="left-arrow"
                className="size-10"
              />
            </div>
            <div>
              <h1 className="text-xl font-600 text-[#25252C]">
              {data?.full_name}
              </h1>
              <p className="text-[#5B5C6E] mt-[6px]">CCN Polytechnic</p>
            </div>
          </div>
          <Link href={data?.resumes?.url ? data?.resumes?.url : ""} className="flex items-center gap-2 px-6 py-4 bg-[#D0D7E7] border border-[#778DB9] text-[#303D5C] font-500 rounded-[14px] cursor-pointer">
            Download Resume
            <Image
              src={ICONS.download2}
              alt="download-icon"
              className="size-4"
            />
          </Link>
        </div>

        {/* Rest sections */}
        <div className="flex flex-col gap-6">
          <EducationDetails education={data?.education} />
          <ProjectDetails projects={data?.projects} />
          <WorkExperience experiences={data?.experience} />
          <Certification certifications={data?.certifications} />
          <Skills />
        </div>
      </div>
    </div>
    );
};

export default EmployeeProfileDetails;