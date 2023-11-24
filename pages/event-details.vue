<template>
  <p>Date: Clicked date: {{ clickedDate }}</p>
</template>
<script>
export default {
  computed: {
    clickedDate() {
      // Access the date parameter from the query
      return this.$route.query.date;
    },
  },
};
</script>
