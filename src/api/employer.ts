import axios from "axios";
import api from ".";
import { IEmployer } from "@/types/employer";
import { JobData } from "@/app/employer/(home)/page";

export const handleGetAllEmployersForAdminService = async ({
  keyword,
}: {
  keyword?: string;
}): Promise<IEmployer[]> => {
  const url = keyword
    ? `${api.allEmployers}?full_name=${keyword}`
    : api.allEmployers;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.employers ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleDeleteEmployerService = async (
  id: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api.adminEmployer}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Employee deleted successfully");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleGEtEmployerByIdForAdminService = async (
  id: string
): Promise<IEmployer> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.adminEmployer}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.employer);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};


export const fetchJobData = async (): Promise<JobData> => {
  const response = await axios.get('https://carrerhub-backend.vercel.app/api/v1/employeer/job', {
    withCredentials: true,
  });
  return response.data;
};

export const fetchJobs = async () => {
  const response = await axios.get('https://carrerhub-backend.vercel.app/api/v1/employeer/job', {
    withCredentials: true,
  });
  return response.data.jobs;
};

export const deleteJob = async (id: string) => {
  const response = await axios.delete(`https://carrerhub-backend.vercel.app/api/v1/job/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

