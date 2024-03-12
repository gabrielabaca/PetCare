import {
  Title,
  Chart,
  CategoryScale,
  ArcElement,
  PointElement,
  LineElement,
  LinearScale,
  Filler,
} from "chart.js";
export default defineNuxtPlugin((nuxtApp) =>
  Chart.register(
    Title,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
  ),
);
