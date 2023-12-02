<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <a class="logo" href="/">
      <img src="~/assets/imgs/logo.png" alt="Logo" />
    </a>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/add-event">Add Event</NuxtLink>
    </nav>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00003c;
}
.logo {
  padding: 10px;
}

nav {
  padding: 0 30px;
}
nav a {
  color: white;
  padding-right: 30px;
  text-decoration: none;
}
</style>
