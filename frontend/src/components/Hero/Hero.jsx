import React from 'react';
import styles from '../Hero/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Connect with Like-Minded Individuals</h1>
      <p className={styles.subtitle}>Discover new friends who share your interests and passions. Create lasting memories together.</p>
      <div className={styles.searchBar}>
        <input type="text" placeholder="What are you interested in doing?" />
        <button className={styles.searchBtn}>Browse Events</button>
      </div>
    </section>
  );
}

export default Hero;