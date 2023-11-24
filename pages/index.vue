<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page">
    <NuxtLink to="/add-event">Add Event</NuxtLink>
    <h1>Hello</h1>
    <VCalendar ref="calendar" :attributes="events" @dayclick="handleDayClick" />
  </div>
</template>
<script>
import calendarData from "../store/index.js";
export default {
  data() {
    return {
      events: calendarData,
    };
  },
  methods: {
    handleDayClick(day) {
      // Access the date property of the clicked day
      const clickedDate = day.date;
      console.log("Clicked date:", clickedDate);

      // Redirect to the event-detail page with the clicked date as a query parameter
      this.$router.push({
        path: "/event-details",
        query: { date: clickedDate },
      });
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
