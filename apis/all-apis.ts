import axiosInstance from "./axios/axiosInstance";

// admin apis
export const getAllPost = async () => {
    const res = await axiosInstance.get("/admin/posts")
    return res.data;
}

export const createPost = async (postData: {
    title: string;
    content: string;
    image: File
}) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);

    const res = await axiosInstance.post("/admin/posts", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
}

export const updatePost = async (post: any) => {
    const res = await axiosInstance.put("/admin/posts", post)
    return res.data;
}

export const deletePost = async (id: string) => {
    const res = await axiosInstance.delete("/admin/posts/" + id)
    return res.data;
}

//  profile apis
export const getProfileData = async () => {
    const res = await axiosInstance.get("/profile/me")
    return res.data;
}
