const baseUrl = process.env.BASE_URL + '/api/v1';

const api = {
    jobs : baseUrl + '/jobs',
    job: baseUrl + '/job',
    createJob : baseUrl + '/createjob',

    // for employees
    employeeRegister : baseUrl + '/register',
    employeeLogin  : baseUrl + '/login',
    employeeOTPVerify : baseUrl + '/verify',
    employeeLogout : baseUrl + '/employee/logout',
    employeeForgotPassword : baseUrl + '/password/forgot',
    employeeChangePassword : baseUrl + '/password/update',
    employeeResetPassword: baseUrl + '/password/reset',
    employeeEnterDetails : baseUrl + '/user/details',
    employeeProfile : baseUrl + '/me',
    updateEmployeeProfile : baseUrl + '/me/update',
    employeeUploadResume : baseUrl + '/resumes',

    // for employers
    employerJob : baseUrl + '/employeer/job',
    employerRegistration : baseUrl + '/register/employeer',
    employerOTPVerify : baseUrl + '/verify/employeer',
    employerLogin  : baseUrl + '/login/employeer',
    employerLogout : baseUrl + '/employeer/logout',
    employerForgotPassword : baseUrl + '/password/forgot/employeer',
    updateEmployerCompanyDetails : baseUrl + 'employeer/details',
    employerProfile : baseUrl + '/employeer/me',
    updateEmployerPRofile : baseUrl + '/employeer/me/update',
    updateEmployerPassword : baseUrl + '/employeer/password/update',
    applyForJob: baseUrl + '/apply/job', // :jobId
};

export default api;