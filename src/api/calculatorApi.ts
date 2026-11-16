import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const calculatePercentage = async (
  obtained: number,
  total: number
) => {
  const response = await API.post("/calculator/percentage", {
    obtained,
    total,
  });

  return response.data;
};