import eventListData from "/src/event-list.json";

const eventsList = eventListData.data;
const calendarData = eventsList.map((event) => ({
  key: event.dateVenue + " " + event.timeVenueUTC,
  dot: event.status === "played" ? "red" : "blue",
  dates: event.dateVenue,
}));

export default calendarData;
