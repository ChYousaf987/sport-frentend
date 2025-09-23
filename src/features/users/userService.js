// redux/userService.js
import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

// Signup user
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Verify OTP
export const verifyOTP = async ({ userId, otp }) => {
  const response = await axios.post(`${API_URL}/verify-otp`, { userId, otp });
  return response.data;
};

// Login user
export const login = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// Fetch current user
export const fetchUserService = async (userId) => {
  const response = await axios.post(`${API_URL}/me`, { userId });
  return response.data;
};

// Update user profile
export const updateUserProfile = async (userData) => {
  const response = await axios.post(`${API_URL}/update-profile`, userData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
