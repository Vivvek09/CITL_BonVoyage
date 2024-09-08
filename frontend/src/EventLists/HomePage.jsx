// // import React from 'react';
// import EventList from '../EventLists/EventList';
// import '../EventLists/event.css'

// function HomePage() {
//   return (
//     <div className="home-page">
//       <h1>Discover Events in Mumbai</h1>
//       <EventList />
//     </div>
//   );
// }

// export default HomePage;

import React, { useState } from 'react';
import EventList from '../EventLists/EventList';
import '../EventLists/event.css';
import Navbar from '../components/Navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
