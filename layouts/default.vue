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
body {
  margin: 0;
}
section {
  width: 100%;
}
</style>
