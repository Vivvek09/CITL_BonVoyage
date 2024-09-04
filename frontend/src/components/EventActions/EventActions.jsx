import React from 'react';
import styles from '../EventActions/EventActions.module.css';

function EventActions() {
  return (
    <section className={styles.eventActions}>
      <div className={styles.actionCard}>
        <h3>Discover nearby Events</h3>
        {/* <input type="text" placeholder="Events near me" /> */}
        <button className={styles.actionBtn}>Events near me</button>
      </div>
      <div className={styles.actionCard}>
        <h3>Start your own group to host events</h3>
        <button className={styles.actionBtn}>Start Group</button>
      </div>
      <div className={styles.actionCard}>
        <h3>Discover Events and Groups</h3>
        {/* <input type="text" placeholder="Search Events and Groups" /> */}
        <button className={styles.actionBtn}>Search Events and Groups</button>
      </div>
    </section>
  );
}

export default EventActions;