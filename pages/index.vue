<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ClientOnly>
    <div class="container">
      <h1>Hello</h1>
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
<style>
.vc-header {
  padding: 30px;
}
.vc-title {
  background: none;
}
.vc-title,
.vc-weekday,
.vc-day-content {
  font-size: 24px;
  padding: 30px;
}
h1 {
  color: red;
}
.vc-container {
  --day-content-height: 150px;
  --day-content-width: 150px;
}
</style>
