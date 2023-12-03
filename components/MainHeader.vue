<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <header>
      <NuxtLink class="logo" to="/">
        <img src="~/assets/imgs/logo.png" alt="Logo" />
      </NuxtLink>
      <nav>
        <NuxtLink class="hover-underline-animation" to="/">Home</NuxtLink>
        <NuxtLink class="hover-underline-animation" to="/add-event"
          >Add Event</NuxtLink
        >
      </nav>
    </header>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00003c;
  margin-bottom: 50px;
}
header {
  width: 100%;
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  transition: 0.5s;
}
.logo:hover {
  transform: scale(1.1);
}
nav {
  display: flex;
  gap: 60px;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>
