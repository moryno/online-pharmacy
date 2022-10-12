import axios from "axios";

const BASE_URL = "http://localhost:3000";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser?.token;

let request = axios.create({ baseURL: BASE_URL });

request.interceptors.request.use(
  (config) => {
    if (TOKEN) {
      config.headers = { Authorization: `Bearer ${TOKEN}` };
    }

    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default request;
