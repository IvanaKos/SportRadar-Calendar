import { defineStore } from "pinia";
import eventListData from "/src/event-list.json";

export const useEventsStore = defineStore("events", {
  state: () => ({
    allEvents: eventListData.data,
    selectedDayEvents: [],
  }),
  actions: {
    addSelectedDayEvent(event) {
      this.selectedDayEvents.push(event);
    },

    clearSelectedDayEvents() {
      this.selectedDayEvents = [];
    },

    getCalendarData(events) {
      return events.map((event, index) => ({
        key: event.dateVenue + " " + event.timeVenueUTC + index,
        dot: event.status === "played" ? "red" : "blue",
        dates: event.dateVenue,
        popover: {
          label:
            (event.homeTeam && event.homeTeam.officialName
              ? event.homeTeam.officialName
              : "unknown") +
            " vs " +
            (event.awayTeam && event.awayTeam.officialName
              ? event.awayTeam.officialName
              : "unknown"),
        },
        customData: event,
      }));
    },

    addNewEvent(event) {
      this.allEvents.push(event);
    },
  },
});
