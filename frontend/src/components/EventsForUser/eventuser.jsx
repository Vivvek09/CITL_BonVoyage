import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./eventcard";
import Navbar from "../Navbar";
import styles from "./EventUser.module.css";
import { useAuth } from "../../AuthContext"; // Import the AuthContext

function EventUser() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth(); // Get the user from the AuthContext

  useEffect(() => {
    const fetchEvents = async () => {
      const userId = user?.id || localStorage.getItem('userId'); // Fetch user ID from context or local storage
      if (!userId) {
        console.error('User ID not found');
        return;
      }
      console.log('User ID:', userId);

      try {
        const response = await axios.get(`http://localhost:3000/api/user-events/${userId}`, { withCredentials: true });
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <>
      <Navbar />
      <div className={styles.flexColumn}>
        <h1 className={styles.title}>Events you have joined</h1>
        <div className={styles.gridContainer}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventUser;
