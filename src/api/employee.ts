import axios from "axios";
import api from ".";
import { IEmployee } from "@/types/employee";

export const handleGetAllEmployeesForAdminService = async ({
  keyword,
}: {
  keyword?: string;
}): Promise<IEmployee[]> => {
  const url = keyword
    ? `${api.allEmployees}?full_name=${keyword}`
    : api.allEmployees;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.employees ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};

export const handleDeleteEmployeeService = async (
  id: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api.adminEmployee}/${id}`, {
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

export const handleGetSingleEmployeeByAdminService = async (
  id: string
): Promise<IEmployee> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api.adminEmployee}/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.employee ?? {});
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Something went wrong");
      });
  });
};
