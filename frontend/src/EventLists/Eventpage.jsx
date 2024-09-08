// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../EventLists/event.css'

// function EventPage() {
//   const [event, setEvent] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchEvent = async () => {
//       const res = await axios.get(`http://localhost:3000/api/events/${id}`);
//       setEvent(res.data);
//     };
//     fetchEvent();
//   }, [id]);

//   if (!event) return <div>Loading...</div>;

//   return (
//     <div className="event-page">
//       <h1>{event.title}</h1>
//       <img src={event.image} alt={event.title} />
//       <p>{event.description}</p>
//       <p>Date: {new Date(event.date).toLocaleString()}</p>
//       <p>Location: {event.location}</p>
//       <p>Attendees: {event.attendees}</p>
//     </div>
//   );
// }

// export default EventPage;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../EventLists/event.css';

function EventPage() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`http://localhost:3000/api/events/${id}`);
      setEvent(res.data);
    };
    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-page">
      <div className="event-content">
        {/* Image Section */}
        <img src={event.image} alt={event.title} />

        {/* Event Details Section */}
        <div className="event-details">
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p><span>Date:</span> {new Date(event.date).toLocaleString()}</p>
          <p><span>Location:</span> {event.location}</p>
          <p><span>Attendees:</span> {event.attendees}</p>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
