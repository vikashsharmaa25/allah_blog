import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// https://yaallah-1.onrender.com/api/auth/login
// https://springboot-with-postgres.onrender.com/api/auth/login
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://yaallah-1.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: any) => {
        // You can add auth token here if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: any) => {
        // Handle common errors here
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Request error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;