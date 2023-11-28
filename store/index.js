import { defineStore } from "pinia";
import eventListData from "/src/event-list.json";

const eventsList = eventListData.data;
const calendarData = eventsList.map((event) => ({
  key: event.dateVenue + " " + event.timeVenueUTC,
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

export const useEventsStore = defineStore("events", {
  state: () => ({
    allEvents: eventsList,
    attributes: calendarData,
    selectedDayEvents: [],
  }),
  actions: {
    addSelectedDayEvent(event) {
      this.selectedDayEvents.push(event);
    },
    clearSelectedDayEvents() {
      this.selectedDayEvents = [];
    },
  },
});
