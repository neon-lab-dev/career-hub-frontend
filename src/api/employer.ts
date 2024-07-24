import axios from "axios";
import api from "."; // Import the `api` object
import { IEmployer } from "@/types/employer";


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


export const updateUserDetails = async (data: any) => {
  const response = await axios.put(api.updateEmployerCompanyDetails, data, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchProfileData = async (applicantId: string) => {
  const response = await axios.get(`${api.employergetemploee}/${applicantId}`, {
      withCredentials: true,
  });
  return response.data.emp;
};

export const approveApplicant = async (data: { jobId: string; applicantId: string; status: string }) => {
  await axios.put(api.changeStatus, data, {
      withCredentials: true,
  });
};

export const rejectApplicant = async (data: { jobId: string; applicantId: string; status: string }) => {
  await axios.put(api.changeStatus, data, {
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
