import React from 'react';
import styles from '../TopCategories/TopCategories.module.css';

function TopCategories() {
  const categories = [
    'Travel & Outdoor', 'Social Activities', 'Hobbies',
    'Sports', 'Art and culture', 'Health & Fitness'
  ];
  return (
    <section className={styles.topCategories}>
      <h2 className={styles.sectionTitle}>TOP CATEGORIES</h2>
      <div className={styles.categoryGrid}>
        {categories.map(category => (
          <button key={category} className={styles.categoryBtn}>{category}</button>
        ))}
      </div>
    </section>
  );
}

export default TopCategories;