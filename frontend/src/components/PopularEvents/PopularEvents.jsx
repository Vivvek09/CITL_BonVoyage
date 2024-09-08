import styles from '../PopularEvents/PopularEvents.module.css';
import concert from '../../assets/images/concert.png';
import clubbing from  '../../assets/images/clubbing.png';
import movie from  '../../assets/images/movie.png';
import beach from '../../assets/images/beach.png';

function PopularEvents() {
  const events = [
    { name: 'CONCERT', image: concert },
    { name: 'CLUBBING', image: clubbing },
    { name: 'MOVIE', image: movie},
    { name: 'BEACH', image: beach },
    { name: 'CONCERT', image: concert },
    { name: 'CLUBBING', image: clubbing },
    { name: 'MOVIE', image: movie},
    { name: 'BEACH', image: beach },
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