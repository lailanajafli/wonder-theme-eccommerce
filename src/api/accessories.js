import axios from "axios";
import { eraseCookie, getCookie } from "./utils/utils";
import { Base_Url } from "./constants/base_url";

const $axios = axios.create({
  baseURL: Base_Url,
});

$axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("BscToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status || 500;
    if (status === 401) {
      localStorage.removeItem("BscToken");
      alert("Sizin sessiyanız bitmişdir. Yenidən daxil olun.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default $axios;
