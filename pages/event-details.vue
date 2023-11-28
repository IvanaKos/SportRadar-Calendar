<template>
  <p>{{ store.selectedDayEvents }}</p>
</template>
<script>
import { useEventsStore } from "../store/index.js";

export default {
  setup() {
    const store = useEventsStore();
    return { store };
  },
};
</script>
