import React from "react";
import { useNavigate } from "react-router-dom";
import { LuCalendar, LuMapPin, LuMessageCircle } from "react-icons/lu"; // Import icons from react-icons/luc
import styles from "./EventCard.module.css";

const EventCard = ({ title, date, time, location, membersCount, eventImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/single-event", {
      state: { event: { title, date, time, location, membersCount, eventImage } }
    });
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src={eventImage} 
              alt={title} 
              className={styles.image}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.eventName}>{title}</span>
              <div className={styles.membersCount}>
                <span className={styles.membersNumber}>{membersCount}+</span>
                <span className={styles.membersLabel}>Members</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailsSection}>
          <div className={styles.dateTime}>
            <h2>Date and Time</h2>
            <div className={styles.dateTimeDetails}>
              <LuCalendar className={styles.icon} /> {/* Use LuCalendar icon */}
              <span>{date}</span>
              <span className={styles.time}>{time}</span>
            </div>
          </div>
          <div className={styles.location}>
            <h2>Location</h2>
            <div className={styles.locationDetails}>
              <LuMapPin className={styles.icon} /> {/* Use LuMapPin icon */}
              <span>{location}</span>
            </div>
          </div>
          <button className={styles.chatButton}>
            <LuMessageCircle className={styles.icon} /> {/* Use LuMessageCircle icon */}
            Chat with Members
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;