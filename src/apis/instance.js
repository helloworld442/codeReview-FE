import axios from "axios";

const instance = axios.create({
  baseURL: "https://ananbada.store:8080/api",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("[DEBUG] request error : ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("[DEBUG] response error : ", error);
    return Promise.reject(error);
  }
);

export default instance;
