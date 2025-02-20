import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchShows = async () => {
  const response = await axios.get(import.meta.env.VITE_SHOWS_API_URL);
  return response.data;
};

export const fetchStages = async () => {
  const response = await axios.get(import.meta.env.VITE_STAGES_API_URL);
  return response.data;
};


export default api;
