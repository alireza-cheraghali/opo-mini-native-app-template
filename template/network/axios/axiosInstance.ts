import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://reqres.in",
    timeout: 10000,
    maxRedirects: 3
});

export default axiosInstance;
