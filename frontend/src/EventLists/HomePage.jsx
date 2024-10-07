import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../EventLists/EventList';
import '../EventLists/event.css';
import Navbar from '../components/Navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSeeOtherEvents = () => {
    // Logic for "See other events" button click
    window.open("https://serpapi.com/search.html?engine=google_events&q=Events+in+Mumbai&gl=in&hl=en&api_key=4dccf256904e0d93c91d9d9183e68107c139b0e03c47315f1e1adeab57de9e6d", "_blank");
    
   // navigate('/google-events'); // Redirect to GoogleEvents page
    console.log("See other events button clicked");
  };

  return (
    <div className="home-page">
      <Navbar />
      <h1>Discover Events in Mumbai</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* "See other events" button */}
      <div className="see-other-events">
        <button onClick={handleSeeOtherEvents}>See other events</button>
      </div>

      {/* Main content: Event list and map side-by-side */}
      <div className="content-container">
        {/* Event List */}
        <div className="event-list-section">
          <EventList searchTerm={searchTerm} />
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Mumbai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.761236330721!2d72.8204379!3d19.0760908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7b8da10e85%3A0x6d0f57d8b8f76884!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1694055589306!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomePage;