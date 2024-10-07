import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from './components/Navbar'; // Import the Navbar component

const GoogleEvents = () => {
  const navigate = useNavigate(); // Create navigate function for routing

  useEffect(() => {
    // Open the Google Events page in a new tab
    window.open("https://serpapi.com/search.html?engine=google_events&q=Events+in+Mumbai&gl=in&hl=en&api_key=4dccf256904e0d93c91d9d9183e68107c139b0e03c47315f1e1adeab57de9e6d", "_blank");
  }, []);

  // Function to handle "Back" button click
  const handleBackClick = () => {
    navigate('/nearbyEvents'); // Navigate to /nearbyEvents
  };

  return (
    <div>
      <Navbar />
 
    </div>
  );
};

export default GoogleEvents;

