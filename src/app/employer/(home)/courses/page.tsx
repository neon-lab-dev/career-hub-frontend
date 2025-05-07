"use client"
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { deleteCourseById, getAllCourses } from "@/api/admin";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { getAllEmployerCourses } from "@/api/employer";

export type Header<T> = {
  header: string;
  accessor: keyof T;
};


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


const EmployerCoursesPage = () => {
    const [jobThatIsBeingDeleted, setJobThatIsBeingDeleted] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["employerCourses"],
    queryFn: getAllEmployerCourses,
  });

  
  // Delete course
  const { mutate: deleteCourse } = useMutation({
    mutationFn: (id: string) => deleteCourseById(id),
    onSuccess: () => {
      toast.success("Course deleted successfully");
      // Invalidate the query to refresh the course list
      queryClient.invalidateQueries({ queryKey: ["employerCourses"] });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  // Delete course
  const handleDeleteCourse = (id: string) => {
    deleteCourse(id);
  };


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
                    <Image src={IMAGES.menudots} alt="menu-dots-icon" />
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
                >
                  <li>
                    <Link
                      href={`/employer/courses/${item.actions}`}
                      className="flex gap-2"
                    >
                      <Image src={IMAGES.view} alt="eye-icon" />
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
                      <Image src={IMAGES.bin} alt="eye-icon" />
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

          <Link href={"/employer/create-course"}
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

export default EmployerCoursesPage;