<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <NuxtLink to="/add-event">Add Event</NuxtLink>
    <h1>Hello</h1>
    <VCalendar :attributes="store.attributes" @dayclick="handleDayClick" />
  </div>
</template>
<script>
import { useEventsStore } from "../store/index.js";

export default {
  setup() {
    const store = useEventsStore();

    return { store };
  },
  methods: {
    handleDayClick(day) {
      const selectedDay = day;

      this.clearDetailsPageData();

      selectedDay.attributes.map((attribute) => {
        this.store.addSelectedDayEvent(attribute.customData);
      });

      this.openDetailsPage();
    },

    openDetailsPage() {
      this.$router.push({
        path: "/event-details",
      });
    },

    clearDetailsPageData() {
      this.store.clearSelectedDayEvents();
    },
  },
};
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
