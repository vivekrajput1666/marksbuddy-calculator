import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const calculateCGPA = async (
  subjects: {
    name: string;
    credits: number;
    gradePoint: number;
  }[]
) => {
  const response = await API.post("/cgpa/calculate", {
    subjects,
  });

  return response.data;
};