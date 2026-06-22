import { apiRequest, tokenStore } from "./Api";

export const authService = {
  async login({ email, password }) {
    const data = await apiRequest("/api/auth/login", {
      method: "POST",
      body: { email, password },
    });
    tokenStore.set(data.token);
    return data.user;
  },

  async signup({ name, email, password }) {
    const data = await apiRequest("/api/auth/signup", {
      method: "POST",
      body: { name, email, password },
    });
    tokenStore.set(data.token);
    return data.user;
  },

  async me() {
    return apiRequest("/api/auth/me", { auth: true });
  },

  logout() {
    tokenStore.clear();
  },
};