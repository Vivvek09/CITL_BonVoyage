import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./SingleEvent.module.css";

function SingleEvent() {
  const location = useLocation();
  const { event } = location.state;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{event.title}</h1>
        <div className={styles.details}>
          <img src={event.eventImage} alt={event.title} className={styles.image} />
          <div className={styles.info}>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Members:</strong> {event.membersCount}</p>
          </div>
        </div>
        <div className={styles.membersList}>
          <h2>Members List</h2>
          {/* Render members list here */}
        </div>
        <div className={styles.chat}>
          <h2>Chat</h2>
          {/* Render chat interface here */}
        </div>
      </div>
    </>
  );
}

export default SingleEvent;