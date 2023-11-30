<template>
  <ul>
    <li
      v-for="selectedDayEvent in store.selectedDayEvents"
      :key="selectedDayEvent.key"
    >
      <p>{{ selectedDayEvent.status }}</p>
      <p>{{ selectedDayEvent.dateVenue }}</p>
      <p>{{ selectedDayEvent.homeTeam.officialName }}</p>
      <p>{{ selectedDayEvent.awayTeam.officialName }}</p>
    </li>
  </ul>
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
