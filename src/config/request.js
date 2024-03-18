import axios from "axios";
import { loadState } from "../lib/storage";

const request = axios.create({ baseURL: "http://localhost:8080/" });

const token = loadState("user");
request.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`,
    };
    console.log("Request object:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return (window.location.pathname = "/");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method === "post"
    ) {
      const requestData = JSON.parse(config.data);

      // Make a POST request to the /category endpoint
      axios.post("http://localhost:8080/category", requestData)
        .then((res) => {
          console.log("Data sent to /category:", res.data);
        })
        .catch((error) => {
          console.error("Error sending data to /category:", error);
        });

      // Make a POST request to the /all endpoint
      axios.post("http://localhost:8080/all", requestData)
        .then((res) => {
          console.log("Data sent to /all:", res.data);
        })
        .catch((error) => {
          console.error("Error sending data to /all:", error);
        });
    }
  }, 500);

  return;
};

export { request };
