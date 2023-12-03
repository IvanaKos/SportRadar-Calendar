<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <h1>Add New Event</h1>
    <form id="form" @submit.prevent="addEvent">
      <div class="event-status">
        <div>
          <input
            type="radio"
            id="scheduled"
            name="drone"
            value="scheduled"
            @change="updateEventStatus"
            :checked="status === 'scheduled'"
          />
          <label for="scheduled">Scheduled</label>
        </div>
        <div>
          <input
            type="radio"
            id="played"
            name="drone"
            value="played"
            @change="updateEventStatus"
            :checked="status === 'played'"
          />
          <label for="played">Played</label>
        </div>
      </div>
      <div class="date-picker">
        <p>{{ dateVenue }}</p>
        <VDatePicker @dayclick="getDate">
          <template #default="{ togglePopover }">
            <button @click="togglePopover">Select date</button>
          </template>
        </VDatePicker>
      </div>
      <div class="teams-container">
        <input
          id="home-team"
          placeholder="Home Team"
          type="text"
          autocomplete="name"
          required
          :value="homeTeam"
          @input="updateHomeTeam"
        />
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
      <div class="result-container" v-if="status === 'played'">
        <input
          type="number"
          id="home-goals"
          name="home-goals"
          min="0"
          max="100"
          :value="homeGoals"
          @input="updateHomeGoals"
        />
        <input
          type="number"
          id="away-goals"
          name="away-goals"
          min="0"
          max="100"
          :value="awayGoals"
          @input="updateAwayGoals"
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
      status: "",
      homeGoals: null,
      awayGoals: null,
    };
  },

  methods: {
    addEvent() {
      const event = {
        dateVenue: this.dateVenue,
        homeTeam: { officialName: this.homeTeam },
        awayTeam: { officialName: this.awayTeam },
        status: this.status,
        result: { homeGoals: this.homeGoals, awayGoals: this.awayGoals },
      };

      this.store.addNewEvent(event);
    },

    updateHomeTeam(event) {
      this.homeTeam = event.target.value;
    },

    updateAwayTeam(event) {
      this.awayTeam = event.target.value;
    },
    getDate({ date }) {
      this.dateVenue = date;
    },
    updateEventStatus(event) {
      this.status = event.target.value;
    },
    updateHomeGoals(event) {
      this.homeGoals = event.target.value;
    },
    updateAwayGoals(event) {
      this.awayGoals = event.target.value;
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
.event-status {
  display: flex;
  gap: 50px;
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
.teams-container {
  display: flex;
  gap: 50px;
}
.teams-container input,
.result-container input {
  width: 300px;
  border: 2px solid #00003c;
  border-radius: 5px;
}
.teams-container input {
  width: 300px;
  padding: 15px;
}
.result-container input {
  width: 50px;
  padding: 10px;
}
.result-container {
  display: flex;
  gap: 50px;
}
.submit-btn {
  width: 120px;
  padding: 15px;
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
