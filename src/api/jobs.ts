import { IJob } from "@/types/job";
import { fetchData } from "./fetch";
import api from ".";
import axios from "axios";

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
  }>(`${api.jobs}/${id}`);
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
      .delete(`${api.job}/${id}`, {
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
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};
