<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ClientOnly>
    <div class="container">
      <h1>My Event Calendar</h1>
      <VCalendar :attributes="attributes" @dayclick="handleDayClick" />
    </div>
  </ClientOnly>
</template>
<script>
import { useEventsStore } from "../store/index.js";

export default {
  setup() {
    const store = useEventsStore();

    const attributes = store.getCalendarData(store.allEvents);

    return {
      store,
      attributes,
    };
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
<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 80px;
}
</style>
