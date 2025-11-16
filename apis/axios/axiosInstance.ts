import axios, { AxiosInstance } from 'axios';

// https://yaallah-1.onrender.com/api/auth/login
// https://springboot-with-postgres.onrender.com/api/auth/login
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://yaallah-1.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: any) => {
        if (error.response) {
        } else if (error.request) {
        } else {
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;