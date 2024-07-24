import axios from "axios";
import api from ".";
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

export const handleGetEmployerByIdForAdminService = async (
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
  return new Promise((resolve, reject) => {
    axios
      .get(api.employerJob, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const fetchJobs = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.employerJob, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data.jobs);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const deleteJob = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api.job}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const fetchProfileData = async (applicantId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.employergetemploee}/${applicantId}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data.emp);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const approveApplicant = async (data: {
  jobId: string;
  applicantId: string;
  status: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .put(api.changeStatus, data, {
        withCredentials: true,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const rejectApplicant = async (data: {
  jobId: string;
  applicantId: string;
  status: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    axios
      .put(api.changeStatus, data, {
        withCredentials: true,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const fetchJobDetails = async (jobId: string): Promise<JobDetails> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.job}/${jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          reject(`Failed to fetch job details. Status: ${res.status}`);
        } else {
          resolve(res.data.jobs);
        }
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const fetchJobDetail = async (viewId: string): Promise<JobDetails> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.job}/${viewId}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data.jobs);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const updateJobDetails = async (
  viewId: string,
  payload: UpdateJobPayload
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api.job}/${viewId}`, payload, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};
