import axios from "axios";
import api from "."; // Import the `api` object
import { IEmployer } from "@/types/employer";
import { JobData } from "@/app/employer/(home)/page";
import { JobDetails, UpdateJobPayload } from "@/app/employer/(home)/[viewId]/page";

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
  const response = await axios.get(api.employerJob, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchJobs = async () => {
  const response = await axios.get(api.employerJob, {
    withCredentials: true,
  });
  return response.data.jobs;
};

export const deleteJob = async (id: string) => {
  const response = await axios.delete(`${api.job}/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchProfileData = async (applicantId: string) => {
  const response = await axios.get(`${api.employeeProfile}/${applicantId}`, {
      withCredentials: true,
  });
  return response.data.emp;
};

export const approveApplicant = async (data: { jobId: string; applicantId: string; status: string }) => {
  await axios.put(api.job, data, {
      withCredentials: true,
  });
};

export const rejectApplicant = async (data: { jobId: string; applicantId: string; status: string }) => {
  await axios.put(api.job, data, {
      withCredentials: true,
  });
};

export const fetchJobDetails = async (jobId: string) => {
  const response = await axios.get(`${api.job}/${jobId}`);
  if (response.status !== 200) {
    throw new Error(`Failed to fetch job details. Status: ${response.status}`);
  }
  return response.data.jobs;
};

export const fetchJobDetail = async (viewId: string): Promise<JobDetails> => {
  const { data } = await axios.get(`${api.job}/${viewId}`, {
      withCredentials: true,
  });
  return data.jobs;
};


export const updateJobDetails = async (viewId: string, payload: UpdateJobPayload) => {
  const { data } = await axios.put(
      `${api.job}/${viewId}`,
      payload,
      { withCredentials: true }
  );
  return data;
};