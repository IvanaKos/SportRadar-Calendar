const eventsData = [];

export const fetchEventsData = async () => {
  try {
    const response = await fetch("/event-list.json"); // Assumes the file is in the public folder
    const eventData = await response.json();
    eventsData.splice(0, eventsData.length, ...eventData);
  } catch (error) {
    console.error("Error fetching events data:", error);
  }
};

// Initial fetch when the application starts
fetchEventsData();

export default eventsData;
