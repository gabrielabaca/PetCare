<template>
  <div class="rounded-lg p-4 pt-6 border mt-4 bg-white">
    <ClientOnly>
      <div
        class="select-options flex justify-between text-center items-center ml-2 mr-2 mb-4"
      >
        <label class="text-[0.7rem]" for="select"
          >{{ labelTitle?.toUpperCase() }}HEALTH MONITORING</label
        >

        <el-select
          id="cars"
          v-model="defaultItem"
          class="border rounded-md"
          name="select"
          style="width: 5rem"
          size="small"
        >
          <el-option
            v-for="(obj, key) in optionsSelect"
            :key="key"
            class="text-[0.7rem]"
            :value="obj.name"
          >
            {{ obj.name }}
          </el-option>
        </el-select>
      </div>

      <div
        class="bottons grid grid-cols-4 border rounded-lg p-2 ml-2 mr-2 mb-4"
      >
        <el-button
          text
          :class="monitoringSelect == 'stresslevel' ? 'select' : ''"
          @click="toogleChart('stresslevel')"
        >
          <el-icon class="el-icon--left">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_17577)">
                <path
                  d="M13.875 19L12.875 20L5.375 12.572C4.8803 12.0906 4.49064 11.512 4.23054 10.8726C3.97045 10.2333 3.84556 9.54695 3.86373 8.85693C3.88191 8.16692 4.04276 7.48814 4.33615 6.86334C4.62955 6.23854 5.04913 5.68126 5.56848 5.22658C6.08783 4.77191 6.6957 4.42969 7.35381 4.22148C8.01191 4.01327 8.706 3.94359 9.39236 4.0168C10.0787 4.09002 10.7425 4.30456 11.3419 4.64691C11.9412 4.98926 12.4632 5.452 12.875 6.006C13.6702 4.94474 14.8545 4.24285 16.1673 4.05475C17.48 3.86665 18.8137 4.20775 19.875 5.003C20.9363 5.79825 21.6381 6.98252 21.8262 8.29527C22.0143 9.60803 21.6732 10.9417 20.878 12.003"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.875 16L17.875 19H21.875L19.875 22"
                  sstroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </el-icon>
          Stress level
        </el-button>

        <el-button
          text
          :class="monitoringSelect == 'pulse' ? 'select' : ''"
          @click="toogleChart('pulse')"
        >
          <el-icon class="el-icon--left">
            <svg
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.125 7H5.625L7.125 1L11.125 13L13.125 4L14.625 7H19.125"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </el-icon>
          Pulse
        </el-button>

        <el-button
          text
          :class="monitoringSelect == 'temperature' ? 'select' : ''"
          @click="toogleChart('temperature')"
        >
          <el-icon class="el-icon--left">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_17591)">
                <path
                  d="M10.375 13.5C9.61243 13.9403 9.01645 14.6199 8.67948 15.4334C8.34252 16.2469 8.2834 17.1488 8.5113 17.9994C8.7392 18.8499 9.24138 19.6015 9.93996 20.1375C10.6385 20.6736 11.4945 20.9641 12.375 20.9641C13.2555 20.9641 14.1115 20.6736 14.81 20.1375C15.5086 19.6015 16.0108 18.8499 16.2387 17.9994C16.4666 17.1488 16.4075 16.2469 16.0705 15.4334C15.7336 14.6199 15.1376 13.9403 14.375 13.5V5C14.375 4.46957 14.1643 3.96086 13.7892 3.58579C13.4141 3.21071 12.9054 3 12.375 3C11.8446 3 11.3359 3.21071 10.9608 3.58579C10.5857 3.96086 10.375 4.46957 10.375 5V13.5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.375 9H14.375"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </el-icon>
          Temperature
        </el-button>

        <el-button
          text
          :class="monitoringSelect == 'calories' ? 'select' : ''"
          @click="toogleChart('calories')"
        >
          <el-icon class="el-icon--left">
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.125 9C9.125 6.04 7.125 2 6.125 1C6.125 4.038 4.352 5.741 3.125 7C1.899 8.26 1.125 10.24 1.125 12C1.125 13.5913 1.75714 15.1174 2.88236 16.2426C4.00758 17.3679 5.5337 18 7.125 18C8.7163 18 10.2424 17.3679 11.3676 16.2426C12.4929 15.1174 13.125 13.5913 13.125 12C13.125 10.468 12.069 8.06 11.125 7C9.339 10 8.334 10 7.125 9Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </el-icon>
          Calories burned
        </el-button>
      </div>

      <Line
        class="mt-2 row-span-2"
        height="120rem"
        :data="chartData"
        :options="chartOptions"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Line } from "vue-chartjs";
import { useMonitoringStore } from "~/store/monitoring";
const store = useMonitoringStore();

await store.fetch();

const { getCalories, getStressLevel, getPulse, getTemperature } =
  storeToRefs(store);

const monitoringSelect = ref("stresslevel");

const getStore = {
  stresslevel: getStressLevel,
  calories: getCalories,
  pulse: getPulse,
  temperature: getTemperature,
};

const props = defineProps({
  labelTitle: String,
  chartColor: String,
  selected: {
    type: String,
    default: "daily",
  },
});

const defaultItem = ref(props.selected);

const optionsSelect = [
  {
    name: "daily",
  },
  {
    name: "weekly",
  },
  {
    name: "monthly",
  },
];

const chartData = ref({
  labels: Object.keys(
    getStore[monitoringSelect.value].value(defaultItem.value),
  ),
  datasets: [
    {
      label: "Datos de ejemplo",
      borderColor: "#3788E5",
      backgroundColor: ["#3788E53D", "#3788E500"],
      fill: "start",
      pointRadius: 0,
      data: Object.values(
        getStore[monitoringSelect.value].value(defaultItem.value),
      ),
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    intersect: false,
  },
  style: {
    height: 40,
  },
  scales: {
    x: {
      grid: {
        color: "transparent",
      },
    },
    y: {
      grid: {
        color: "#DAE3F8",
      },
      border: {
        dash: [8, 4],
      },
    },
  },
});

const toogleChart = (chart: string) => {
  monitoringSelect.value = chart;
  defaultItem.value = "daily";
};

const reloadChart = () => {
  chartData.value = {
    labels: Object.keys(
      getStore[monitoringSelect.value].value(defaultItem.value),
    ),
    datasets: [
      {
        label: "Datos de ejemplo",
        borderColor: "#3788E5",
        backgroundColor: ["#3788E53D", "#3788E500"],
        fill: "start",
        pointRadius: 0,
        data: Object.values(
          getStore[monitoringSelect.value].value(defaultItem.value),
        ),
      },
    ],
  };
};
watch(defaultItem, () => {
  reloadChart();
});
watch(monitoringSelect, () => {
  reloadChart();
});
</script>

<style scoped>
.bottons .el-button svg {
  stroke: black;
}
.bottons .el-button:hover svg {
  stroke: white;
}
.bottons .el-button {
  font-size: 0.75rem !important;
}
.bottons .el-button:hover {
  color: white;
  background-color: rgba(55, 136, 229, 0.5);
}
.select {
  background-color: rgba(55, 136, 229, 1);
  color: white !important;
}
.select svg {
  stroke: white !important;
}
</style>
