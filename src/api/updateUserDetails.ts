import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";
import api from ".";


interface CustomFormData {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  education: any[];
  projects: any[];
  experience: any[];
  certifications: any[];
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
  }[];
  interests: string[];
}

// Update User Details
const updateUserDetails = (formData: CustomFormData): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios.put(api.employeedetails, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then(response => resolve(response.data))
    .catch(error => reject(new Error(error?.response?.data?.message ?? 'Error updating user details')));
  });
};


export const useUpdateUserDetails = (): UseMutationResult<any, Error, CustomFormData> => {
  return useMutation({
    mutationFn: updateUserDetails,
  });
};

