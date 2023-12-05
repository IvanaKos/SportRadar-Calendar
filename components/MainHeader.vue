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
  background-color: var(--dark);
  margin-bottom: 20px;
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
  color: var(--light);
  text-decoration: none;
}

.hover-underline-animation {
  padding-bottom: 8px;
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--light);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
