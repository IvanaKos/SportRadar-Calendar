<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <NuxtLink to="/add-event">Add Event</NuxtLink>
    <h1>Hello</h1>
    <VCalendar v-model="date" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "#imports";
const date = ref(new Date());
</script>
<style>
.vc-header {
  padding: 50px;
}
.vc-title {
  background: none;
}
.vc-title,
.vc-weekday,
.vc-day-content {
  font-size: 30px;
  padding: 40px;
}
h1 {
  color: red;
}
.vc-container {
  --day-content-height: 150px;
  --day-content-width: 150px;
}
</style>
