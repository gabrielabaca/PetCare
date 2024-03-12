import { defineStore } from "pinia";
interface DailyData {
  [day: string]: number;
}

interface WeeklyData {
  [week: string]: number;
}

interface MonthlyData {
  [month: string]: number;
}

interface Metrics {
  daily: DailyData;
  weekly: WeeklyData;
  monthly: MonthlyData;
}

interface ExampleData {
  stress_level: Metrics;
  pulse: Metrics;
  temperature: Metrics;
  calories_burned: Metrics;
}

export const useMonitoringStore = defineStore("moitoring", {
  state: (): ExampleData => ({
    stress_level: {
      daily: {},
      weekly: {},
      monthly: {},
    },
    pulse: {
      daily: {},
      weekly: {},
      monthly: {},
    },
    temperature: {
      daily: {},
      weekly: {},
      monthly: {},
    },
    calories_burned: {
      daily: {},
      weekly: {},
      monthly: {},
    },
  }),
  getters: {
    getStressLevel: (state) => {
      return (period: string = "daily") => state.stress_level[period];
    },
    getPulse: (state) => {
      return (period: string = "daily") => state.pulse[period];
    },
    getTemperature: (state) => {
      return (period: string = "daily") => state.temperature[period];
    },
    getCalories: (state) => {
      return (period: string = "daily") => state.calories_burned[period];
    },
  },
  actions: {
    async fetch() {
      const { data } = await $fetch("/api/healtHistory");

      this.stress_level = data.stress_level;
      this.pulse = data.pulse;
      this.temperature = data.temperature;
      this.calories_burned = data.calories_burned;
    },
  },
});
