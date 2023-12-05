<template>
  <div class="container">
    <ul>
      <li
        v-for="(selectedDayEvent, index) in store.selectedDayEvents"
        :key="selectedDayEvent.key"
      >
        <div class="selected-date" v-if="index === 0">
          <img src="~/assets/imgs/logo.png" alt="Logo" />
          {{ selectedDayEvent.dateVenue }}
        </div>
        <div class="accordion">
          <details>
            <summary>
              {{
                selectedDayEvent.homeTeam &&
                selectedDayEvent.homeTeam.officialName
                  ? selectedDayEvent.homeTeam.officialName
                  : "----"
              }}
              vs
              {{
                selectedDayEvent.awayTeam &&
                selectedDayEvent.awayTeam.officialName
                  ? selectedDayEvent.awayTeam.officialName
                  : "----"
              }}
            </summary>
            <p>{{ selectedDayEvent.originCompetitionName }}</p>
            <p>Status: {{ selectedDayEvent.status }}</p>
            <p>
              Result:
              {{
                selectedDayEvent.result && selectedDayEvent.result.homeGoals
                  ? selectedDayEvent.result.homeGoals
                  : "-"
              }}
              :
              {{
                selectedDayEvent.result && selectedDayEvent.result.awayGoals
                  ? selectedDayEvent.result.awayGoals
                  : "-"
              }}
            </p>
          </details>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useEventsStore } from "../store/index.js";

export default {
  setup() {
    const store = useEventsStore();
    return { store };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  width: 60%;
}

.selected-date {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  gap: 20px;
  margin-bottom: 40px;
}

.selected-date img {
  width: 30px;
}

details {
  margin-bottom: 10px;
  border: 1px solid var(--dark);
  color: var(--dark);
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 20px;
  overflow: hidden;
  animation-name: accordion-close;
  animation-duration: 0.2s;
}

details[open] {
  animation-name: accordion-master;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  transform-origin: top;
}

@keyframes accordion-master {
  from {
    max-height: 75px;
  }
  to {
    max-height: 300px;
  }
}

@keyframes accordion-close {
  from {
    min-height: 300px;
  }
  to {
    min-height: 75px;
  }
}

summary {
  border: 1px solid var(--dark);
  background-color: var(--dark);
  color: var(--light);
  list-style: none;
  display: flex;
  gap: 50px;
  padding: 22px 30px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
}

summary:after {
  content: "";
  flex-shrink: 0;
  background: center url("~/assets/imgs/angle-down-solid.svg") no-repeat;
  width: 20px;
  height: 20px;
  transition: transform 0.4s ease;
}

details p {
  opacity: 0;
  margin-left: 30px;
}

details[open] summary ~ * {
  animation: open-details 0.5s forwards;
}

details.closing summary ~ * {
  animation: close-details 0.2s;
}

@keyframes open-details {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes close-details {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

details[open] summary:after {
  transform: rotate(180deg);
}

details[open] summary {
  font-weight: 600;
}
</style>
