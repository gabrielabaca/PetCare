<template>
  <div class="grid grid-cols-3 gap-5">
    <ClientOnly>
      <DoughnutBase
        data-store="activity"
        vale="activity"
        label-title="Activity"
        chart-color="#E53761"
      ></DoughnutBase>
      <DoughnutBase
        data-store="sleep"
        vale="sleep"
        label-title="sleep"
        chart-color="#27A468"
      ></DoughnutBase>
      <DoughnutBase
        data-store="wellness"
        vale="wellness"
        label-title="welness"
        chart-color="#F2A735"
      ></DoughnutBase>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useStaticStorage } from "../../store/statics";

const store = useStaticStorage();

if (!store.is_update) {
  await store.fetch();
}
</script>

<style scoped></style>
