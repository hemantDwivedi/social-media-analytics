import axios from "axios";

const baseURL = "http://localhost:8080";

// User
export const userById = (id) => axios.get(`${baseURL}/users/${id}`);
export const getUsers = () => axios.get(`${baseURL}/users`);

// Social media account
export const accountById = (id) => axios.get(`${baseURL}/accounts/${id}`);
export const getAccounts = (userId) => axios.get(`${baseURL}/accounts/${userId}`);


// Analytics
export const analyticsById = (accountId) => axios.get(`${baseURL}/analytics/${accountId}`);