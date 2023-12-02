<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <h1>Add New Event</h1>
    <form id="form" @submit.prevent="addEvent">
      <div class="date-picker">
        <p>{{ dateVenue }}</p>
        <VDatePicker v-model="date" @dayclick="getDate">
          <template #default="{ togglePopover }">
            <button @click="togglePopover">Select date</button>
          </template>
        </VDatePicker>
      </div>
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
      <input type="submit" value="Submit" class="submit-btn" />
    </form>
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
      dateVenue: null,
    };
  },

  methods: {
    addEvent() {
      this.store.addNewEvent({
        dateVenue: this.dateVenue,
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
    getDate({ date }) {
      const selectedDate = date;
      console.log(date);
      console.log(selectedDate);
      this.dateVenue = date;
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

input {
  width: 500px;
  padding: 15px;
  border: 2px solid #00003c;
  border-radius: 5px;
}

.date-picker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.date-picker button {
  margin-bottom: 30px;
  padding: 15px;
  width: 200px;
  background-color: white;
  border: 2px solid #00003c;
  border-radius: 5px;
  text-transform: uppercase;
  transition: 0.4s;
}

.date-picker button:hover {
  background-color: #00003c;
  color: white;
}
.submit-btn {
  width: 100px;
  background-color: #00003c;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  transition: 0.4s;
}
.submit-btn:hover {
  background-color: white;
  color: #00003c;
}
</style>
