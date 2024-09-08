import React from "react";
import EventCard from "./eventcard";
import Navbar from "../Navbar";
import styles from "./EventUser.module.css";

function EventUser() {
  const events = [
    {
      title: "Beach Party Event",
      date: "2024-09-02",
      time: "18:30",
      location: "Juhu Beach, Vile Parle West., Mumbai, India",
      membersCount: 56,
      eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
    },
   
    {
      title: "City Marathon",
      date: "2024-11-20",
      time: "05:30",
      location: "Central Park, New York, USA",
      membersCount: 78,
      eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
      chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
    },
    {
        title: "Beach Party Event",
        date: "2024-09-02",
        time: "18:30",
        location: "Juhu Beach, Vile Parle West., Mumbai, India",
        membersCount: 56,
        eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
      },
      {
        title: "Beach Party Event",
        date: "2024-09-02",
        time: "18:30",
        location: "Juhu Beach, Vile Parle West., Mumbai, India",
        membersCount: 56,
        eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
      },
     
      {
        title: "City Marathon",
        date: "2024-11-20",
        time: "05:30",
        location: "Central Park, New York, USA",
        membersCount: 78,
        eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
      },
      {
          title: "Beach Party Event",
          date: "2024-09-02",
          time: "18:30",
          location: "Juhu Beach, Vile Parle West., Mumbai, India",
          membersCount: 56,
          eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
          dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
          locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
          chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
        },
     
      {
        title: "City Marathon",
        date: "2024-11-20",
        time: "05:30",
        location: "Central Park, New York, USA",
        membersCount: 78,
        eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/80e18eae65b330c3dc59020fae4d26c0f2448733d53bf7f1ba6f86ce5d7399a4?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        dateIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed2a5540012617b7ec582e303f80ae4b7564ced9688f12e108824cb0a15ecae?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        locationIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/316ce821b9238751ba069d55f4eab50341c6787fd39a40b4569686b8b724741d?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352",
        chatIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3178635a47be4626ad2a6a1b9ec8812a7de85a5c880bbf82363ee790178f2d5?placeholderIfAbsent=true&apiKey=433434157f134a548d8a823886c69352"
      }
  ];

  return (
    <>
     {/* <Navbar />
      <div className={styles.flexColumn}>
        <h1 className={styles.title}>Events you have joined</h1>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div> */}
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