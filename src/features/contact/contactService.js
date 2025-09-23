import axios from "axios";

const API_URL = "http://localhost:3001/api/contact";

// Submit contact form
export const submitContact = async (formData) => {
  const response = await axios.post(`${API_URL}/contact`, formData);
  return response.data;
};
