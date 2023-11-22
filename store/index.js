import eventListData from "/src/event-list.json";

const eventsList = eventListData.data;
const calendarData = eventsList.map((event) => ({
  key: event.dateVenue + " " + event.timeVenueUTC,
  dot: true,
  dates: event.dateVenue,
}));

export default calendarData;
