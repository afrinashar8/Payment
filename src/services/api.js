import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

export const getUserDetails = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};

export const getPeerUsers = async () => {
  const response = await axios.get(`${API_URL}/peers`);
  return response.data;
};

export const createTransaction = async (from, to, amount) => {
  const response = await axios.post(`${API_URL}/transactions`, { from, to, amount });
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};
