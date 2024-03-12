import { defineStore } from "pinia";

interface User {
  userName: string | null;
  token: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): User => ({
    userName: null,
    token: null,
  }),

  getters: {
    getUsernmane: (state) => state.userName,
    getToken: (state) => state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
