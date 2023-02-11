import { axiosClient } from "./axiosClient"

const LoginApi = {
    login: (url, data) => {
        return axiosClient.post(url, data)
    },
    checkLoginByToken: (url) => {
        return axiosClient.get(url)
    },
    register: (url, data) => {
        return axiosClient.post(url, data)
    },
    checkRegisterByToken: (url) => {
        return axiosClient.get(url)
    },
    logout: (url) => {
        return axiosClient.post(url)
    }


}

export { LoginApi }