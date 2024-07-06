import { IJob } from "@/types/job";
import { fetchData } from "./fetch";
import api from ".";

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
