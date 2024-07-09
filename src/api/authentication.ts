import axios from "axios";
import api from ".";

// Employee authentication
export const setToLocalStorage = (email: any) => {
  localStorage.setItem("user", email);
};

// Get user loggedin data from local storage.
export const getUserDataFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user;
};

// Remove user data from logout
export const deleteUser = () => {
  localStorage.removeItem("user");
};

export const handleAdminLoginService = async (data: {
  email: string;
  password: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(api.adminLogin, data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Login successful");
      })
      .catch((err) => {
        reject(err.response?.data?.message ?? "Login failed");
      });
  });
};

export const handleGetAminProfileService = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.adminProfile, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response?.data?.message ?? "Failed to get profile");
      });
  });
};

export const handleAdminLogoutService = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .get(api.adminLogout, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.message ?? "Logout successful");
      })
      .catch((err) => {
        reject(err.response?.data?.message ?? "Failed to logout");
      });
  });
};

export const handleSendResetPasswordEmailService = async (data: {
  email: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(api.employeeForgotPassword, data)
      .then((res) => {
        resolve(res.data?.message ?? "Email sent successfully");
      })
      .catch((err) => {
        reject(err.response?.data?.message ?? "Failed to send email");
      });
  });
};

export const handleResetPasswordService = async (data: {
  password: string;
  confirmPassword: string;
  token: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api.employeeResetPassword}/${data.token}`, data)
      .then((res) => {
        resolve(res.data?.message ?? "Password reset successful");
      })
      .catch((err) => {
        reject(err.response?.data?.message ?? "Failed to reset password");
      });
  });
};