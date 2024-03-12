<template>
  <div class="rounded-lg p-4 pt-6 border bg-white" style="max-height: 100%">
    <div class="flex justify-between text-center items-center">
      <label class="text-[0.7rem]" for="select">{{
        labelTitle?.toUpperCase()
      }}</label>
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

    <Doughnut
      :data="chartData"
      :options="chartOptions"
      class="mt-6"
      style="max-height: 10rem"
    />
    <div
      class="text-center lg:text-[3em] md:text-[2em] lg:mt-[-7rem] lg:mb-[2.5rem] md:mt-[-5rem] md:mb-[0rem]"
    >
      <h1>
        {{
          store[props.dataStore][defaultItem ? defaultItem : "daily"]
            .percentage
        }}%
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStaticStorage } from "~/store/statics";
import { Doughnut } from "vue-chartjs";
import { ref } from "vue";

const props = defineProps({
  labelTitle: String,
  chartColor: String,
  selected: {
    type: String,
    default: "daily",
  },
  dataStore: String,
});

const store = useStaticStorage();

const { getActivity, getSleep, getWellness } = storeToRefs(store);

const defaultItem = ref(props.selected);

const getStore = {
  activity: getActivity,
  sleep: getSleep,
  wellness: getWellness,
};

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
  datasets: [
    {
      data: [
        getStore[props.dataStore].value(defaultItem.value).percentage,
        100 - getStore[props.dataStore].value(defaultItem.value).percentage,
      ],
      backgroundColor: [props.chartColor, "#F2F5FA"],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  borderRadius: 50,
  weight: 1,
  borderAlign: "center",
  cutout: "87%",
  borderColor: "#F2F5FA",
  style: {
    height: 40,
  },
});

watch(defaultItem, () => {
  chartData.value = {
    datasets: [
      {
        data: [
          getStore[props.dataStore].value(defaultItem.value).percentage,
          100 - getStore[props.dataStore].value(defaultItem.value).percentage,
        ],
        backgroundColor: [props.chartColor, "#F2F5FA"],
      },
    ],
  };
});
</script>
