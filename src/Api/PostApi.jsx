import axios from "axios"

const api = axios.create(
    {
        baseURL: "https://jsonplaceholder.typicode.com",
    })

export const getData = () => {
    return api.get("/posts");
}

export const postData = (data) => {
    return api.post("/posts", data);
}

export const deleteData = (id) => {
    return api.delete(`/posts/${id}`);
}

export const updateData = (id) => {
    return api.put(`/posts/${id}`);
}
