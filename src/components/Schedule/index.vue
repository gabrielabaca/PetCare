<template>
  <div class="rounded-[0.8rem] p-4 pt-6 pb-6 border bg-white">
    <div class="select-options grid grid-cols-2 ml-2 mr-2 mb-4">
      <label class="text-[0.8rem]" for="select">VACCINATION SCHEDULE</label>

      <div class="col-start-2 row-span-1 mt-[-5px]">
        <el-select
          v-model="defaultItem"
          class="rounded-md shadow-none float-end"
          name="select"
          style="width: 6rem;"
          size="small" 
          :suffix-icon="ArrowDownBold"
        >
          <el-option
            v-for="(obj, key) in optionsSelect"
            :key="key"
            class="text-[0.7rem] font-light"
            :value="obj.prop_name"
            :label="obj.name"
          >
          <template #default="scope">
            <div class="font-light text-[0.8rem]">{{ obj.name }}</div>
          </template>
          </el-option>
        </el-select>
        <el-button class="search float-end mr-4 mt-[0.1rem]" text circle />
      </div>
    </div>
    <div class="pl-2 pr-2">
    <el-table
      :data="tableData"
      class="veterinar-table"
      :sort="sortOrder"
      ref="scheduleTable"
      :header-cell-style="{
        backgroundColor: '#F2F5FA',
        borderColor: '#DAE3F8',
        color: '#0B1C33',
        fontWeight: '500',
        fontSize: '0.75rem',
        paddingTop: '1.1rem',
        paddingBottom: '1.1rem'
      }"
      :cell-style="{
        color: '#0B1C33',
        fontWeight: '500',
        fontSize: '0.75rem',
        paddingTop: '1.1rem',
        paddingBottom: '1.1rem',
        maxWidth: '60px'
      }"
    >
      <el-table-column fixed label="Name" prop="name" width="90">
        <template #header="scope">
          <div style="margin-left: 0.8rem;">Name</div>
        </template>
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 0.8rem;">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column fixed label="Type" prop="_type" width="100">
        <template #header="scope">
          <div style="margin-left: 0.5rem;">Type</div>
        </template>
        <template #default="scope">
          <div style="display: flex;">
            <el-button
              :color="scope.row._type.color"
              :style="{
                minWidth: '50px',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.7rem',
                borderRadius: '8px',
                padding: '8px',
                paddingTop: '13px',
                paddingBottom: '13px'
              }"
              size="small"
              plain
            >
              {{ scope.row._type.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Date" prop="date"> 
        <template #header="scope">
          <div class="ml-[2.4rem]">Date</div>
        </template>
        <template #default="scope">
          <div class="ml-10" style="display: flex; align-items: center; text-wrap: nowrap">
            <span>{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column class="pl-6 pr-6" label="Veterinar" prop="veterinar" header-align="right">
        <template #header="scope">
          <div style="margin-right: 0.8rem;">Veterinar</div>
        </template>
        <template #default="scope">
          <div style="display: flex; align-items: right; text-wrap: nowrap; margin-right: 0.8rem; ">
            <el-button
              v-if="scope.row.veterinar"
              :style="{
                width: '100%',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.8rem',
                borderRadius: '8px'
              }"
            >
              {{ scope.row.veterinar }}
            </el-button>
            <el-button
              v-else
              color="#3788E5"
              :style="{
                width: '100%',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.8rem',
                borderRadius: '8px'
              }"
            >
              Find veterinar
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownBold } from '@element-plus/icons-vue';

const props = defineProps({
  labelTitle: String,
  chartColor: String,
  selected: { type: String, default: "_type" },
});

interface User {
  name: string;
  date: string;
  _type: object;
  veterinar: String | null;
}
interface ColorCodes {
  success: {
    type:String,
    default:'#27A468'
  },
  error: {
    type:String,
    default:'#D03258'
  },
  warning: {
    type:String,
    default: '#F2A735'
  }
}
const sortOrder = ref({ prop: 'name', order: 'ascending' })
const scheduleTable = ref(null)

const defaultItem = ref(props.selected);
const tableData: User[] = [
  {
    name: "Rabies",
    _type: {
      text: "Overdue",
      color: "#D03258",
    },
    date: "01 Dec 2023",
    veterinar: null,
  },
  {
    name: "Bordetella",
    _type: {
      text: "Noncore",
      color: "#F2A735",
    },
    date: "11 Dec 2024",
    veterinar: "James Grey",
  },
  {
    name: "Distemper",
    _type: {
      text: "Core",
      color: "#27A468",
    },
    date: "27 Jun 2024",
    veterinar: "Jim Brown",
  },
  {
    name: "Calicivirus",
    _type: {
      text: "Core",
      color: "#27A468",
    },
    date: "16 Sep 2024",
    veterinar: "Helen Brooks",
  },
];

const optionsSelect = [
  {
    name: "By name",
    prop_name: "name"
  },
  {
    name: "By type",
    prop_name: "_type"
  },
  {
    name: "By date",
    prop_name: "date"
  },
  {
    name: "By veterinar",
    prop_name: "veterinar"
  },
];


watch(defaultItem, () => {
  const table = scheduleTable.value;
  table.sort(defaultItem.value, 'ascending');
})

</script>

<style scoped>
.veterinar-table {
  width: 100%;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  border-left-style: solid;
  border-right-style: solid;
  border-right-color: rgb(229, 231, 235);
  border-width: 1px;
  border-color: #dae3f8;
  padding-left: 0;
}

.veterinar-table table thead th:last_child {
  background-color: red !important;
  float: right !important;
}
.search {
  background-image: url("icons/Search.png");
  background-size: 18px;
  background-position: 6px 6px;
  background-repeat: no-repeat;
  right: 10px !important;
}

</style>
