"use client";
import { useState, useEffect, useCallback } from "react";
import NotFound from "@/components/NotFound";
import { AVAILABLE_JOB_TYPES } from "@/constants/jobTypes";
import ApplyFilter from "../_components/ApplyFilter";
import { ICONS } from "@/assets";
import Image from "next/image";
import JobDetailCard from "@/components/JobDetailCard";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllJobsByTypeService } from "@/api/jobs";
import debounce from "@/helpers/debounce";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/hooks/store";

type Props = {
  params: {
    jobType: string;
  };
};

export type IDefaultQueryParams = {
  keyword: string;
  locationType: string;
};

export const DEFAULT_QUERY_PARAMS: IDefaultQueryParams = {
  keyword: "",
  locationType: "",
};

const PageComponent = ({ jobType }: { jobType: string }) => {
  const { studentProfile } = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState<IDefaultQueryParams>({
    ...DEFAULT_QUERY_PARAMS,
    keyword: searchParams.get("search") || "",
  });
  const [debouncedQueryParams, setDebouncedQueryParams] =
    useState<IDefaultQueryParams>(DEFAULT_QUERY_PARAMS);

  const debouncedSetParams = useCallback(
    debounce((queryParams) => {
      setDebouncedQueryParams(queryParams);
    }),
    [] // dependencies
  );

  // update debouncedQueryParams whenever queryParams changes
  useEffect(() => {
    debouncedSetParams(queryParams);
  }, [queryParams]);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["jobs", debouncedQueryParams, jobType],
    queryFn: () =>
      handleGetAllJobsByTypeService({
        ...debouncedQueryParams,
        type: jobType,
      }),
  });
  return (
    <div className="wrapper bg-[#f5f6fa] py-6">
      <div className="flex justify-between gap-10">
        <ApplyFilter
          setFilterParams={setQueryParams}
          filterParams={queryParams}
        />
        <div className="flex flex-1 flex-col gap-9">
          {/* Search field */}
          <div className="bg-white rounded-[10px] w-full p-4 flex gap-2 justify-between items-center">
            <input
              value={queryParams.keyword}
              onChange={(e) => {
                setQueryParams({
                  ...queryParams,
                  keyword: e.target.value,
                });
              }}
              type="text"
              placeholder={`Search ${jobType} here...`}
              className="bg-white focus:outline-none w-full"
            />
            <Image
              src={ICONS.magnifer}
              alt="search-icon"
              className="w-[18px] cursor-pointer"
            />
          </div>

          {/* Job cards */}
          {isLoading ? (
            <>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
            </>
          ) : data?.length === 0 ? (
            <div className="text-center text-neutral-500 flex items-center justify-center h-40">
              <span>No {jobType} found</span>
            </div>
          ) : (
            data?.map((details, index: number) => (
              <JobDetailCard
                wrapperClassName=""
                key={index}
                job={details}
                showApplyButton
                isApplied={
                  details?.applicants.findIndex((a) => {
                    a.employee === studentProfile?._id;
                  }) !== -1
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const Page = ({ params: { jobType } }: Props) => {
  if (!AVAILABLE_JOB_TYPES.includes(jobType)) return <NotFound />;
  return (
    <PageComponent
      // @ts-ignore
      jobType={jobType}
    />
  );
};

export default Page;
