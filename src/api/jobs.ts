import { IJob } from "@/types/job";
import { fetchData } from "./fetch";
import api from ".";
import axios from "axios";
import { IDefaultQueryParams } from "@/app/(employee)/(job-listing)/_components/ApplyFilter";

export interface IJobResponse {
  success: boolean;
  jobsCount: number;
  jobs: IJob[];
  resultPerPage: number;
  filteredJobsCount: number;
}

export const getLatestInternships = async () => {
  const jobs = await fetchData<IJobResponse>(
    `${api.jobs}?employmentType=Internship`
  );
  return jobs?.jobs ?? [];
};

export const getLatestJobs = async () => {
  const jobs = await fetchData<IJobResponse>(`${api.jobs}`);
  return jobs?.jobs?.filter((j) => j.employmentType !== "Internship") ?? [];
};

export const getJobById = async (id: string) => {
  const job = await fetchData<{
    jobs: IJob;
  }>(`${api.job}/${id}`);
  return job?.jobs ?? null;
};

export const getJobsByTitle = async (title: string) => {
  const jobs = await fetchData<IJobResponse>(`${api.jobs}?keyword=${title}`);
  return jobs?.jobs ?? [];
};

export const handleGetAllJobsForAdminService = async ({
  keyword,
}: {
  keyword?: string;
}): Promise<IJob[]> => {
  const url = keyword ? `${api.jobs}?keyword=${keyword}` : api.jobs;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.jobs ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleDeleteJobService = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api.adminJob}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Job deleted successfully");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleGetJobByIdForAdminService = async (
  id: string
): Promise<IJob> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.job}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.jobs ?? null);
      })
      .catch((err) => {
        reject(err?.response?.message ?? "Something went wrong");
      });
  });
};

export const handleApplyJobService = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api.applyJob}/${id}`, {}, { withCredentials: true })
      .then((res) => {
        resolve(res.data?.message ?? "Applied successfully");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to apply");
      });
  });
};

export const handleGetAllJobsByTypeService = async ({
  type,
  salary,
  duration,
  experienceLevel,
  ...params
}: IDefaultQueryParams & {
  type: string;
}): Promise<IJob[]> => {
  const truthyParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value)
  );

  return new Promise((resolve, reject) => {
    axios
      .get(`${api.jobs}`, {
        withCredentials: true,
        params: {
          ...truthyParams,
          "salary[gte]": salary,
          "employmentDuration[gte]": duration,
        },
      })
      .then((res) => {
        let jobs = res.data?.jobs ?? [];
        if (type) {
          jobs = jobs.filter((job: IJob) => {
            if (type === "internships") {
              return job.employmentType === "Internship";
            } else {
              return job.employmentType !== "Internship";
            }
          });
        }
        if (experienceLevel) {
          jobs = jobs.filter((job: IJob) => {
            return (
              job.experience.toLowerCase() === experienceLevel.toLowerCase()
            );
          });
        }
        resolve(jobs ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleWithdrawApplicationService = async (
  id: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api.withDrawApplication}/${id}`, {}, { withCredentials: true })
      .then((res) => {
        resolve(res.data?.message ?? "Application withdrawn successfully");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};
