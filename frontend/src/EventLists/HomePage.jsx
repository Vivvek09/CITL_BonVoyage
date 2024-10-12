
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../EventLists/event.css';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={event.image} alt={event.title} />
    <div className="event-info">
      <h3>{event.title}</h3>
      <p>{event.startTime} - {event.endTime}</p>
      <p>{event.location}</p>
      <Link to={`/event/${event._id}`}>View Details</Link>
    </div>
  </div>
);

function HomePage() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
   
  const handleSeeOtherEvents = () => {
    window.open("https://serpapi.com/search.html?engine=google_events&q=Events+in+Mumbai&gl=in&hl=en&api_key=4dccf256904e0d93c91d9d9183e68107c139b0e03c47315f1e1adeab57de9e6d", "_blank");
    console.log("See other events button clicked");
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [location, setLocation] = useState([19.0760, 72.8777]);
  const [zoom, setZoom] = useState(11.5);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLocation([19.0760, 72.8777]); // Fallback to Mumbai
        }
      );
    } else {
      setLocation([19.0760, 72.8777]); // Fallback to Mumbai
    }
  }, []);

  const SetViewOnClick = ({ coords }) => {  
    const map = useMap();
    map.setView(coords, zoom);
    return null;
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="search-bar">
            <input
              type="text"
              placeholder="Search for anything"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button">
              <img src="/api/placeholder/20/20" alt="Search" />
            </button>
          </div>
          <div className="see-other-events">
            <button onClick={handleSeeOtherEvents}>See other events</button>
          </div>
      <div className="content">
        <div className="left-section">
          <div className="event-list-section">
            {filteredEvents.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
        <div className="map-section">
            <MapContainer center={location} zoom={zoom} style={{ height: "500px", width: "800px" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={location}>
                <Popup>
                  You are here
                </Popup>
              </Marker>
              <SetViewOnClick coords={location} />
            </MapContainer>
          </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;