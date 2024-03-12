import { defineStore } from "pinia";

export const useTestStore = defineStore("counter", {
  state: () => ({ test: "Hola Mundo" }),
  getters: {
    getTest: (state) => state.test,
  },
  actions: {
    changeText(newText: string) {
      this.test = newText;
    },
  },
});
