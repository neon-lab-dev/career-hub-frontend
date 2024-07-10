const baseUrl = "https://carrerhub-backend.vercel.app/api/v1";

const api = {
  jobs: baseUrl + "/jobs",
  createJob: baseUrl + "/createjob",
  getEmployeeApplications: baseUrl + "/employee/job",

  // for employees
  employeeRegister: baseUrl + "/register",
  employeeLogin: baseUrl + "/login",
  employeeOTPVerify: baseUrl + "/verify",
  employeeLogout: baseUrl + "/logout",
  employeeForgotPassword: baseUrl + "/password/forgot",
  employeeChangePassword: baseUrl + "/password/update",
  employeeResetPassword: baseUrl + "/password/reset",
  employeeEnterDetails: baseUrl + "/user/details",
  employeeProfile: baseUrl + "/me",
  updateEmployeeProfile: baseUrl + "/me/update",
  employeeUploadResume: baseUrl + "/resumes",

  // for employers
  employerJob: baseUrl + "/employeer/job",
  employerRegistration: baseUrl + "/register/employeer",
  employerOTPVerify: baseUrl + "/verify/employeer",
  employerLogin: baseUrl + "/login/employeer",
  employerOtpVerify: baseUrl + "/verify/employeer",
  employerLogout: baseUrl + "/employeer/logout",
  employerForgotPassword: baseUrl + "/password/forgot/employeer",
  updateEmployerCompanyDetails: baseUrl + "employeer/details",
  employerProfile: baseUrl + "/employeer/me",
  updateEmployerPRofile: baseUrl + "/employeer/me/update",
  updateEmployerPassword: baseUrl + "/employeer/password/update",

  // for admin
  adminLogin: baseUrl + "/login/admin",
  adminProfile: baseUrl + "/admin/me",
  adminLogout: baseUrl + "/logout/admin",
  allEmployees: baseUrl + "/admin/allEmployees",
  adminEmployee: baseUrl + "/admin/employee", //:id
  allEmployers: baseUrl + "/admin/allEmployers",
  adminEmployer: baseUrl + "/admin/employer", //:id
  job: baseUrl + "/job",
  applyJob: baseUrl + "/apply/job", //:id
  adminStats: baseUrl + "/admin/counts",
};

export default api;
