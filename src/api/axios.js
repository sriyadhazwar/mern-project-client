import axios from "axios";
const BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
