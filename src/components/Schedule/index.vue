<template>
  <div class="rounded-lg p-4 pt-6 border bg-white">
    <div class="grid grid-cols-2 ml-2 mr-2 mb-4">
      <label class="text-[0.7rem]" for="select">VACCINATION SCHEDULE</label>

      <div class="col-start-2 row-span-1">
        <el-select
          id="cars"
          v-model="defaultItem"
          class="border rounded-md float-end"
          name="select"
          style="width: 5rem"
          size="small"
        >
          <el-option
            v-for="(obj, key) in optionsSelect"
            :key="key"
            class="text-[0.7rem]"
            :value="obj.prop_name"
            :label="obj.name"
          >
            {{ obj.name }}
          </el-option>
        </el-select>
        <el-button class="search float-end" text circle />
      </div>
    </div>
    <el-table
      :data="tableData"
      class="veterinar-table"
      :sort="sortOrder"
      ref="scheduleTable"
      :header-cell-style="{
        backgroundColor: '#F2F5FA',
        color: '#0B1C33',
        fontWeight: '500',
        fontSize: '0.75rem',
        paddingTop: '15px',
        paddingBottom: '15px',
      }"
      :cell-style="{
        color: '#0B1C33',
        fontWeight: '500',
        fontSize: '0.75rem',
        paddingTop: '15px',
        paddingBottom: '15px',
      }"
    >
      <el-table-column label="Name" prop="name" width="70" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Type" prop="_type" width="105" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-button
              :type="scope.row._type.color"
              :style="{
                width: '100%',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.75rem',
              }"
              size="small"
              plain
            >
              {{ scope.row._type.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Date" prop="date" width="120" > 
        <template #default="scope">
          <div style="display: flex; align-items: center; text-wrap: nowrap">
            <span>{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Veterinar" prop="veterinar" header-align="right" >
        <template #default="scope">
          <div style="display: flex; align-items: right; text-wrap: nowrap">
            <el-button
              v-if="scope.row.veterinar"
              :style="{
                width: '100%',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.75rem',
              }"
            >
              {{ scope.row.veterinar }}
            </el-button>
            <el-button
              v-else
              type="primary"
              :style="{
                width: '100%',
                marginLeft: '10px',
                fontWeight: '500',
                fontSize: '0.75rem',
              }"
            >
              Find veterinar
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">

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
const sortOrder = ref({ prop: 'name', order: 'ascending' })
const scheduleTable = ref(null)

const defaultItem = ref(props.selected);
const tableData: User[] = [
  {
    name: "Rabies",
    _type: {
      text: "Overdue",
      color: "danger",
    },
    date: "01 Dec 2023",
    veterinar: null,
  },
  {
    name: "Bordetella",
    _type: {
      text: "Noncore",
      color: "warning",
    },
    date: "11 Dec 2024",
    veterinar: "James Grey",
  },
  {
    name: "Distemper",
    _type: {
      text: "Core",
      color: "success",
    },
    date: "27 Jun 2024",
    veterinar: "Jim Brown",
  },
  {
    name: "Calicivirus",
    _type: {
      text: "Core",
      color: "success",
    },
    date: "16 Sep 2024",
    veterinar: "Helen Brooks",
  },
];

const optionsSelect = [
  {
    name: "By Name",
    prop_name: "name"
  },
  {
    name: "By Type",
    prop_name: "_type"
  },
  {
    name: "By Date",
    prop_name: "date"
  },
  {
    name: "By Veterinar",
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
  border-radius: 5px;
  border-left-style: solid;
  border-right-style: solid;
  border-right-color: rgb(229, 231, 235);
  border-width: 1px;
  border-color: #dae3f8;
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
