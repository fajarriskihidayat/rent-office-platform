import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "X-API-KEY": "eyndkfnfn5965869nkendutd?=",
  },
});

export default axiosInstance;
