// services/api.js
import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_URL; // Replace with your API base URL
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "authToken"
)}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addTransaction = (data) => {
  return axiosInstance.post("/transactions", data);
};

export { axiosInstance };
