<template>
  <div class="rounded-[0.8rem] p-4 pt-5 border bg-white" style="max-height: 100%">
    <div class="select-options flex justify-between text-center items-center">
      <label class="text-[0.8rem]" for="select">{{
        labelTitle?.toUpperCase()
      }}</label>
      <el-select
        v-model="defaultItem"
        class="capitalize shadow-none"
        name="select"
        style="width: 6rem"
        size="small" 
        :suffix-icon="ArrowDownBold"
      >
        <el-option
          v-for="(obj, key) in optionsSelect"
          :key="key"
          class="text-[0.7rem] capitalize font-light"
          :value="obj.name"
        >
        <template #default="scope">
          <div class="font-light text-[0.8rem]">{{ obj.name }}</div>
        </template>
          
        </el-option>
      </el-select>
    </div>

    <Doughnut
      :data="chartData"
      :options="chartOptions"
      class="mt-6"
      style="max-height: 12rem"
      
    />
    <div
      class="text-center font-bold lg:text-[2.4rem] lg:mt-[-7.9rem] lg:mb-[4rem] md:text-[1.9em] md:mt-[-5rem] md:mb-[0rem]"
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
import { ArrowDownBold } from "@element-plus/icons-vue";

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
      hoverBackgroundColor: [props.chartColor, '#F2F5FA'],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  borderRadius: [50, 0],
  borderColor: [props.chartColor, "#F2F5FA"],
  borderWidth: 0,
  weight: '0px',
  borderAlign: "inner",
  hoverBorderWidth: 0,
  hoverBorderColor:'#F2F5FA',
  clip: false,
  cutout: "84%",
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
