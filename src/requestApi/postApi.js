import { axiosClient } from "./axiosClient";

const postApi = {
    createPost: (data) => {
        return axiosClient.post('/post', data)
    },
    getPost: () => {
        return axiosClient.get(`post`);
    },
}

export default postApi