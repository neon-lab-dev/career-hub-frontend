"use client";
import React, { useCallback, useState } from "react";
import trash from "@/assets/icons/Trash Bin Trash.svg";
import eye from "@/assets/icons/eye.svg";
import search from "@/assets/icons/Search.svg";
import Image from "next/image";
import menuDots from "@/assets/icons/menu-dots.svg";
import Table from "@/components/Table";
import { Header } from "../../tableTypes";
import SearchInput from "../../_components/SearchInput";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  handleDeleteJobService,
} from "@/api/jobs";
import { toast } from "sonner";
import Link from "next/link";
import Loading from "@/components/Loading";
import debounce from "@/helpers/debounce";
import { getAllSkillProgrammes, deleteSkillProgramme } from "@/api/admin";

type DataItem = {
  name: string;
  postedDate: string;
  actions: string;
};

export interface ISkill {
  _id: string;
  name: string;
  description: string;
  skillCovered: string;
  video: {
      _id: string;
      name: string;
      url: string;
      createdAt: string;
  };
  thumbnail: {
      _id: string;
      fileId: string;
      name: string;
      url: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}


const SkillProgramme = () => {
  const [jobThatIsBeingDeleted, setJobThatIsBeingDeleted] = useState("");
  const [keyword, setKeyword] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["skillprogrammes"],
    queryFn: getAllSkillProgrammes,
  });


  const debouncedSetKeyword = useCallback(
    debounce((queryParams) => {
      setKeyword(queryParams);
    }),
    [] // dependencies
  ); //callback to ensure that setSearchParams is not called on every render

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => {
      setJobThatIsBeingDeleted(id);
      return handleDeleteJobService(id);
    },
    onSuccess: () => {
      toast.success("Job deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin", "job"],
      });
    },
    onError: (error: string) => {
      toast.error(error);
    },
    onSettled: () => {
      setJobThatIsBeingDeleted("");
    },
  });


  // Delete skill
  const { mutate: deleteSkill } = useMutation({
    mutationFn: (skillId: string) => deleteSkillProgramme(skillId),
    onSuccess: () => {
      toast.success("Skill deleted successfully");
      // Invalidate the query to refresh the skills list
      queryClient.invalidateQueries({ queryKey: ["skillprogrammes"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  // Delete skill
  const handleDeleteSkill = (skillId: string) => {
    deleteSkill(skillId);
  };
  


  // Table data
  const headers: Header<DataItem>[] = [
    { header: "Name", accessor: "name" },
    { header: "Posted Date", accessor: "postedDate" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderCustomCell = (column: Header<DataItem>, item: DataItem) => {
    if (column.accessor === "actions") {
      return (
        <div key="actions">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              {jobThatIsBeingDeleted === item.actions && isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <Image src={menuDots} alt="menu-dots-icon" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
            >
              <li>
                <Link
                  href={`/admin/skill-programmes/${item.actions}`}
                  className="flex gap-2"
                >
                  <Image src={eye} alt="eye-icon" />
                  <span>Edit</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleDeleteSkill(item.actions);
                  }}
                  className="flex gap-2 text-red-500"
                >
                  <Image src={trash} alt="eye-icon" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return item[column.accessor];
  };

  return (
    <div className="bg-[#f5f6fa] p-6 flex flex-col gap-[51px]">
      {/* <div className="flex items-center gap-5">
        <KPICard
          classNames="w-full max-w-full"
          image={jobPosted}
          title="Total Opportunities"
          value={isLoading ? "..." : data?.length || 0}
          alt="employees-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Jobs"
          value={
            isLoading
              ? "..."
              : data?.filter((job) => job.employmentType !== "Internship")
                  .length || 0
          }
          alt="employees-icon"
        />
        <KPICard
          classNames="w-full max-w-full"
          image={applicationIcon}
          title="Internships"
          value={
            isLoading
              ? "..."
              : data?.filter((job) => job.employmentType === "Internship")
                  .length || 0
          }
          alt="employees-icon"
        />
      </div> */}

      <div className="bg-white flex flex-col gap-3 pt-3">
        <div className="flex items-center justify-between px-4">
          {/* Search field */}
          <SearchInput
            placeholder="Search user"
            icon={search}
            onChange={(e) => {
              debouncedSetKeyword(e.target.value);
            }}
          />

          {/* Download CSV button */}
          <Link href={"/admin/create-skill-programme"}
        className="bg-neutral-450 border border-neutral-550 rounded-[10px] font-plus-jakarta-sans text-base font-500 text-secondary-925 px-4 pt-3 pb-[14px]"
      >
        Create Programme
      </Link>
        </div>

        {isLoading ? (
          <Loading className="h-40" />
        ) : (
          <Table
            className="w-full max-w-full pb-32"
            headers={headers}
            data={
              data?.skills?.map((skill:ISkill) => ({
                name: skill.name,
                postedDate: new Date(skill.createdAt).toDateString(),
                actions: skill._id,
              })) as DataItem[]
            }
            renderCustomCell={renderCustomCell}
          />
        )}
      </div>
    </div>
  );
};

export default SkillProgramme;
