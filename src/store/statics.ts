import { defineStore } from "pinia";

interface Percentages {
  activity: Statics;
  sleep: Statics;
  wellness: Statics;
  is_update: boolean;
}

interface Statics {
  daily: {
    percentage: number;
  };
  weekly: {
    percentage: number;
  };
  monthly: {
    percentage: number;
  };
}

export const useStaticStorage = defineStore("statics", {
  state: (): Percentages => ({
    activity: {
      daily: { percentage: 0 },
      weekly: { percentage: 0 },
      monthly: { percentage: 0 },
    },
    sleep: {
      daily: { percentage: 0 },
      weekly: { percentage: 0 },
      monthly: { percentage: 0 },
    },
    wellness: {
      daily: { percentage: 0 },
      weekly: { percentage: 0 },
      monthly: { percentage: 0 },
    },
    is_update: false,
  }),
  getters: {
    getActivity: (state) => {
      return (period: string = "daily") => state.activity[period];
    },
    getSleep: (state) => {
      return (period: string = "daily") => state.sleep[period];
    },
    getWellness: (state) => {
      return (period: string = "daily") => state.wellness[period];
    },
  },
  actions: {
    async fetch() {
      const { data } = await $fetch("/api/statics");

      this.activity = data.activity;
      this.sleep = data.sleep;
      this.wellness = data.wellness;
      this.is_update = true;
    },
  },
});
