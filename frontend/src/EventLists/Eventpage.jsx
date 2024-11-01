


import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import '../EventLists/EventDetails.css';
import Navbar from '../components/Navbar';
import { format, isValid } from 'date-fns';

function EventPage() {
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/events/${id}`);
        setEvent(res.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  const eventDate = new Date(event.startTime);
  const formattedDate = isValid(eventDate) ? format(eventDate, 'EEEE, d MMMM yyyy') : 'Invalid Date';
  const formattedTime = isValid(eventDate) ? format(eventDate, 'h:mm a') : 'Invalid Time';

  return (
    <div className="event-details-wrapper">
      <Navbar />
      <div className="event-content">
        <img src={event.image} alt={event.title} className="event-image" />
        <h1 className="event-title">{event.title}</h1>
        <div className="event-info">
          <div className="info-column">
            <h2>Date and Time</h2>
            <p><span className="icon">📅</span> {formattedDate}</p>
            <p><span className="icon">🕒</span> {formattedTime}</p>
            <a href="#" className="add-to-calendar">+ Add to Calendar</a>
            <h2>Location</h2>
            <p><span className="icon">📍</span> {event.location}</p>
          </div>
          <div className="info-column">
            <button className="join-group-button" onClick={() => navigate(`/events/${id}/register`)}>Join Group</button>
            <p className="price">Price: {event.ticketPrice ? `Rs ${event.ticketPrice}` : 'Free'}</p>
          </div>
        </div>
        <div className="event-description">
          <h2>Event Description</h2>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventPage;