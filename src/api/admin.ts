import axios from "axios";
import api from ".";

export interface IAdminStats {
  jobsCount: number;
  employersCount: number;
  employeesCount: number;
  hiredApplicantsCount: number;
}

export const handleGetAdminStatsService = async (): Promise<IAdminStats> => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.adminStats, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data ?? null);
      })
      .catch((err) => {
        reject(err?.response?.message ?? "Something went wrong");
      });
  });
};
