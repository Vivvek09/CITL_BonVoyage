import React from 'react';
import styles from '../PopularEvents/PopularEvents.module.css';

function PopularEvents() {
  const events = [
    { name: 'CONCERT', image: '/bonvoyage-frontend/public/concert.png' },
    { name: 'CLUBBING', image: '/bonvoyage-frontend/public/clubbing.png' },
    { name: 'MOVIE', image: '/bonvoyage-frontend/public/movie.png' },
    { name: 'BEACH', image: '/bonvoyage-frontend/public/beach.png' },
    { name: 'CONCERT', image: '/bonvoyage-frontend/public/concert.png' },
    { name: 'CLUBBING', image: '/bonvoyage-frontend/public/clubbing.png' },
    { name: 'MOVIE', image: '/bonvoyage-frontend/public/movie.png' },
    { name: 'BEACH', image: '/bonvoyage-frontend/public/beach.png' }
  ];

  return (
    <section className={styles.popularEvents}>
      <h2 className={styles.sectionTitle}>POPULAR EVENTS</h2>
      <div className={styles.eventGrid}>
        {events.map(event => (
          <div key={event.name} className={styles.eventCard}>
            <img src={event.image} alt={event.name} />
            <span className={styles.eventLabel}>{event.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularEvents;