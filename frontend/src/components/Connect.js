import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero/Hero';
import PopularEvents from '../components/PopularEvents/PopularEvents';
import TopCategories from './TopCategories/TopCategories';
import EventActions from './EventActions/EventActions';
import styles from '../App.module.css';

function Connect() {
  return (
    <div className={styles.app}>
      {/* <Header /> */}
      <Hero />
      <PopularEvents />
      <TopCategories />
      <EventActions />
    </div>
  );
}

export default Connect;