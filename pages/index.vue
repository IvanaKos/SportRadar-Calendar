<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <NuxtLink to="/add-event">Add Event</NuxtLink>
    <h1>Hello</h1>
    <VCalendar v-model="date" />
    <VDatePicker v-model="date" :attributes="attrs" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "#imports";
const date = ref(new Date());
const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);
</script>
<style>
h1 {
  color: red;
}
</style>
