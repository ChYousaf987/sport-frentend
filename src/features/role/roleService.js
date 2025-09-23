import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

export const submitRoleChange = async (formData) => {
  const response = await axios.post(`${API_URL}/role-change`, formData);
  return response.data;
};

export const getRoleRequests = async (userId) => {
  const response = await axios.get(`${API_URL}/role-requests`, {
    data: { userId },
  });
  return response.data;
};

export const manageRoleRequest = async ({ userId, requestId, action }) => {
  const response = await axios.post(`${API_URL}/manage-role-request`, {
    userId,
    requestId,
    action,
  });
  return response.data;
};
