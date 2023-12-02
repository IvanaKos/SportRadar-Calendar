<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <MainHeader />
    <NuxtPage />
  </section>
</template>
<script>
import MainHeader from "~/components/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>
<style>
html {
  font-family: Poppins, sans-serif;
}
body {
  margin: 0;
}
section {
  width: 100%;
}
.vc-header {
  padding: 30px;
}

.vc-title {
  background: none;
}

.vc-title,
.vc-weekday,
.vc-day-content {
  font-size: 1.4rem;
  padding: 25px;
}
</style>
