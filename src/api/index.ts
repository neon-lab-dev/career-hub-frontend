const baseUrl = process.env.BASE_URL + '/api/v1';

const api = {
    jobs : baseUrl + '/jobs',
    createJob : baseUrl + '/createjob',
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
};

export default api;