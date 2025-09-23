// redux/eventService.js
import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/create-event`, eventData);
  return response.data;
};

export const fetchOrganizerEvents = async (userId) => {
  const response = await axios.post(`${API_URL}/organizer-events`, { userId });
  return response.data;
};
