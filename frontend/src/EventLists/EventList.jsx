// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import EventCard from './EventCard';

// function EventList() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const res = await axios.get('http://localhost:3000/api/events');
//       setEvents(res.data);
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div className="event-list">
//       {events.map(event => (
//         <EventCard key={event._id} event={event} />
//       ))}
//     </div>
//   );
// }

// export default EventList;

import { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import '../EventLists/event.css'

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/events');
        setEvents(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map(event => (
          <EventCard key={event._id} event={event} />
        ))
      )}
    </div>
  );
}

export default EventList;