import axios from "axios";

const api = axios.create({
  baseURL: "https://reurb-backend-autumn-haze-6365.fly.dev/",
});

export default api;