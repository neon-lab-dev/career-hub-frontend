"use client";
import React, { useState } from "react";
import KPICard from "@/components/KPICard";
import trash from "@/assets/icons/Trash Bin Trash.svg";
import eye from "@/assets/icons/eye.svg";
import search from "@/assets/icons/Search.svg";
import Image from "next/image";
import menuDots from "@/assets/icons/menu-dots.svg";
import Table from "@/components/Table";
import { Header } from "../../tableTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Link from "next/link";
import Loading from "@/components/Loading";
import { deleteCourseById, getAllCourses } from "@/api/admin";


interface IDataItem {
  name: string;
  postedDate: string;
  description: string;
  videos: string;
  actions: string;
};

export interface ICourse {
  _id: string;
  name: string;
  description: string;
  videos: {
      _id: string;
      name: string;
      url: string;
      createdAt: string;
  }[];
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

const Courses = () => {
  const [jobThatIsBeingDeleted, setJobThatIsBeingDeleted] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  

  // Delete course
  const { mutate: deleteCourse } = useMutation({
    mutationFn: (id: string) => deleteCourseById(id),
    onSuccess: () => {
      toast.success("Course deleted successfully");
      // Invalidate the query to refresh the course list
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  // Delete course
  const handleDeleteCourse = (id: string) => {
    deleteCourse(id);
  };

  console.log(data?.courses)


  // Table data
  const headers: Header<IDataItem>[] = [
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Videos", accessor: "videos" },
    { header: "Posted Date", accessor: "postedDate" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderCustomCell = (column: Header<IDataItem>, item: IDataItem) => {
    if (column.accessor === "actions") {
      return (
        <div key="actions">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              {jobThatIsBeingDeleted === item.actions ? (
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
                  href={`/admin/courses/${item.actions}`}
                  className="flex gap-2"
                >
                  <Image src={eye} alt="eye-icon" />
                  <span>Edit Course</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleDeleteCourse(item.actions);
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

      <div className="bg-white flex flex-col gap-3 pt-3">
        <div className="flex items-center justify-end px-4">
          {/* Search field */}
          {/* <SearchInput
            placeholder="Search user"
            icon={search}
            onChange={(e) => {
              debouncedSetKeyword(e.target.value);
            }}
          /> */}

          {/* Download CSV button */}
          <Link href={"/admin/create-course"}
        className="bg-neutral-450 border border-neutral-550 rounded-[10px] font-plus-jakarta-sans text-base font-500 text-secondary-925 px-4 pt-3 pb-[14px]"
      >
        Create Course
      </Link>
        </div>

        {isLoading ? (
          <Loading className="h-40" />
        ) : (
          <Table
            className="w-full max-w-full pb-32"
            headers={headers}
            data={
              data?.courses?.map((course:ICourse) => ({
                name:course.name,
                description: course.description,
                videos: course?.videos ? course?.videos?.length : 0,
                postedDate: new Date(course.createdAt).toDateString(),
                actions: course._id,
              })) as IDataItem[]
            }
            renderCustomCell={renderCustomCell}
          />
        )}
      </div>
    </div>
  );
};

export default Courses;
