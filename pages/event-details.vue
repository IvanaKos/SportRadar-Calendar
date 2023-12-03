<template>
  <div class="container">
    <ul>
      <li
        v-for="(selectedDayEvent, index) in store.selectedDayEvents"
        :key="selectedDayEvent.key"
      >
        <p v-if="index === 0">{{ selectedDayEvent.dateVenue }}</p>
        <div class="accordion">
          <details>
            <summary>
              {{
                selectedDayEvent.homeTeam &&
                selectedDayEvent.homeTeam.officialName
                  ? selectedDayEvent.homeTeam.officialName
                  : "unknown"
              }}
              vs
              {{
                selectedDayEvent.awayTeam &&
                selectedDayEvent.awayTeam.officialName
                  ? selectedDayEvent.awayTeam.officialName
                  : "unknown"
              }}
            </summary>
            <p>Status: {{ selectedDayEvent.status }}</p>
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
  width: 80%;
}
/* .accordion {
  width: 100%;
} */

details {
  margin-bottom: 10px;
  border: 1px solid #00003c;
  color: #00003c;
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
    max-height: var(--accordion-min-height);
  }
  to {
    max-height: var(--accordion-max-height);
  }
}

@keyframes accordion-close {
  from {
    min-height: var(--accordion-max-height);
  }
  to {
    min-height: var(--accordion-min-height);
  }
}

summary {
  border: 1px solid #00003c;
  background-color: #00003c;
  color: white;
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
  color: var(--highlight_dark);
  background: center url("~public/angle-down-solid.svg") no-repeat;
  width: 20px;
  height: 20px;
  transition: transform 0.4s ease;
}

details p {
  padding: 30px;
  margin-bottom: 0;
  opacity: 0;
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
