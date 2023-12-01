<template>
  <section>
    <NuxtLink to="/">Home</NuxtLink>
    <h1>Add Event</h1>
    <div class="form-container">
      <form id="form" @submit.prevent="addEvent">
        <div class="input-unit">
          <input
            id="home-team"
            placeholder="Home Team"
            type="text"
            autocomplete="name"
            required
            :value="homeTeam"
            @input="updateHomeTeam"
          />
        </div>
        <div class="input-unit">
          <input
            id="away-team"
            placeholder="Away Team"
            type="text"
            autocomplete="email"
            required
            :value="awayTeam"
            @input="updateAwayTeam"
          />
        </div>
        <p>{{ homeTeam }}</p>

        <input type="submit" value="Submit" class="submit-btn" />
      </form>
    </div>
  </section>
</template>
<script>
import { useEventsStore } from "../store/index.js";
export default {
  setup() {
    const store = useEventsStore();

    return { store };
  },

  data() {
    return {
      homeTeam: "",
      awayTeam: "",
    };
  },

  methods: {
    addEvent() {
      this.store.addNewEvent({
        homeTeam: this.homeTeam,
        awayTeam: this.awayTeam,
      });
    },

    updateHomeTeam(event) {
      this.homeTeam = event.target.value;
    },

    updateAwayTeam(event) {
      this.awayTeam = event.target.value;
    },
  },
};
</script>
