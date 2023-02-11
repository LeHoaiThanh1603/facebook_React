import axios from "axios"

export const setHeadersRequests = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}