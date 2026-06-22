import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const TOKEN_KEY = "sma_token";

export const tokenStore = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

export async function apiRequest(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = tokenStore.get();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    // Shape: { message, errors? } from the Spring error handler
    const error = new Error(data.message || "Something went wrong.");
    error.status = res.status;
    error.fieldErrors = data.errors || {};
    throw error;
  }
  return data;
}

// User
export const userById = (id) => axios.get(`${BASE_URL}/users/${id}`);
export const getUsers = () => axios.get(`${BASE_URL}/users`);

// Social media account
export const accountById = (id) => axios.get(`${BASE_URL}/accounts/${id}`);
export const getAccounts = (userId) => axios.get(`${BASE_URL}/accounts/${userId}`);


// Analytics
export const analyticsById = (accountId) => axios.get(`${BASE_URL}/analytics/${accountId}`);