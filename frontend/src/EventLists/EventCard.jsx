// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../EventLists/event.css'

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleString()}</p>
      <p>{event.attendees} attendees</p>
      <Link to={`/event/${event._id}`}>View Details</Link>
    </div>
  );
}

// Define the prop types for EventCard
EventCard.propTypes = {
  event: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    attendees: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
