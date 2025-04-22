import axios from "axios";
import api from ".";

// Get all skill programmes
export const getAllEvents = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios
        .get(api.events, {
          withCredentials: true,
        })
        .then((res) => {
          resolve(res?.data ?? null);
        })
        .catch((err) => {
          reject(err?.response?.message ?? "Something went wrong");
        });
    });
  };