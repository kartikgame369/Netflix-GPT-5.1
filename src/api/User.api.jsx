import axios from "axios";

const api = axios.create({
  baseURL: "api/v1/users",
  withCredentials: true, 
});

export default api;
