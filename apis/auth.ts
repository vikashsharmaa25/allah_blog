import axiosInstance from "./axios/axiosInstance";

export const userRegister = async (payload: any) => {
    const res = await axiosInstance.post("/auth/register-user", payload)
    return res.data;
}

export const userLogin = async (payload: any) => {
    const res = await axiosInstance.post("/auth/login", payload)
    return res.data;
}
