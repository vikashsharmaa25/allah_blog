import axios, { AxiosInstance } from 'axios';

// https://yaallah-1.onrender.com/api/auth/login
// https://springboot-with-postgres.onrender.com/api/auth/login
const axiosInstance: any = axios.create({
    baseURL: 'https://yaallah-1.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config: any) => {
        // Get token from localStorage
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        // If token exists, add it to the headers
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
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