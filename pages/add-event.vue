<template>
  <section class="container">
    <h1>Add New Event</h1>
    <form id="form" @submit.prevent="">
      <div class="event-status">
        <div>
          <input
            type="radio"
            value="scheduled"
            @change="updateEventStatus"
            :checked="status === 'scheduled'"
            required
          />
          <label for="scheduled">Scheduled</label>
        </div>
        <div>
          <input
            type="radio"
            value="played"
            @change="updateEventStatus"
            :checked="status === 'played'"
            required
          />
          <label for="played">Played</label>
        </div>
      </div>

      <div class="date-picker">
        <div v-if="!dateVenue" class="date-request">Please select a date.</div>
        <p class="selected-date" v-if="dateVenue">
          {{ formatDate(dateVenue) }}
        </p>
        <VDatePicker @dayclick="getSelectedDate">
          <template #default="{ togglePopover }">
            <button @click="togglePopover">Select date</button>
          </template>
        </VDatePicker>
      </div>

      <div class="competition-name">
        <input
          placeholder="Competition Name"
          type="text"
          required
          :value="originCompetitionName"
          @input="updateOriginCompetitionName"
        />
      </div>

      <div class="teams-container">
        <input
          placeholder="Home Team"
          type="text"
          required
          :value="homeTeam"
          @input="updateHomeTeam"
        />
        <input
          placeholder="Away Team"
          type="text"
          required
          :value="awayTeam"
          @input="updateAwayTeam"
        />
      </div>

      <div class="result-container" v-if="status === 'played'">
        <input
          type="number"
          name="home-goals"
          min="0"
          max="100"
          :value="homeGoals"
          @input="updateHomeGoals"
          required
        />
        <input
          type="number"
          name="away-goals"
          min="0"
          max="100"
          :value="awayGoals"
          @input="updateAwayGoals"
          required
        />
      </div>

      <input
        type="submit"
        value="Submit"
        class="submit-btn"
        :disabled="dateVenue && status && originCompetitionName ? false : true"
        @click="addEvent"
      />
    </form>

    <div v-if="submitted" class="event-details-container">
      <p>Selected Date: {{ formatDate(dateVenue) }}</p>
      <p>Event Status: {{ status }}</p>
      <p>Competition Name: {{ originCompetitionName }}</p>
      <p>Home Team: {{ homeTeam }}</p>
      <p>Away Team: {{ awayTeam }}</p>
      <p v-if="homeGoals && awayGoals">
        Result: {{ homeGoals }} : {{ awayGoals }}
      </p>
      <p v-else>Result: - : -</p>
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
      dateVenue: null,
      status: "",
      originCompetitionName: "",
      homeTeam: "",
      awayTeam: "",
      homeGoals: null,
      awayGoals: null,
      submitted: false,
    };
  },

  methods: {
    addEvent() {
      const event = {
        dateVenue: this.dateVenue,
        originCompetitionName: this.originCompetitionName,
        homeTeam: { officialName: this.homeTeam },
        awayTeam: { officialName: this.awayTeam },
        status: this.status,
        result: { homeGoals: this.homeGoals, awayGoals: this.awayGoals },
      };

      this.store.addNewEvent(event);

      this.submitted = "true";
    },

    getSelectedDate({ date }) {
      this.dateVenue = date;
    },

    formatDate() {
      const options = { day: "numeric", month: "short", year: "numeric" };
      return new Date(this.dateVenue).toLocaleDateString(undefined, options);
    },

    updateOriginCompetitionName(event) {
      this.originCompetitionName = event.target.value;
    },

    updateHomeTeam(event) {
      this.homeTeam = event.target.value;
    },

    updateAwayTeam(event) {
      this.awayTeam = event.target.value;
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
  margin-bottom: 30px;
}

.event-status {
  display: flex;
  gap: 50px;
}

.event-status input {
  cursor: pointer;
}

.date-request {
  color: var(--accent);
  margin-bottom: 15px;
}

.selected-date {
  color: var(--medium);
  font-size: 1.1rem;
  font-weight: bold;
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
  background-color: var(--light);
  border: 2px solid var(--dark);
  border-radius: 5px;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
}

.date-picker button:hover {
  background-color: var(--dark);
  color: var(--light);
}

.teams-container {
  display: flex;
  gap: 50px;
}

.competition-name input,
.teams-container input,
.result-container input {
  width: 300px;
  border: 2px solid var(--dark);
  border-radius: 5px;
}

.competition-name input,
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
  background-color: var(--dark);
  color: var(--light);
  border-radius: 5px;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: var(--light);
  color: var(--dark);
}

.event-details-container {
  width: 500px;
  padding: 10px 20px;
  border: 2px solid var(--medium);
  border-radius: 5px;
}

.event-details-container p {
  font-weight: bold;
}
</style>
