import { useState } from 'react'
import styles from './date-card.module.scss'

type DateCardProps = {
  handleClick: () => void;
}

export default function DateCard ({handleClick}: DateCardProps) {

  return (
    <article className={styles.card}>
      <p className={styles.date}>
        <span className={styles.number}>30</span>
        мая
      </p>
      <div className={styles.container}>
        <span className={`${styles.registration} ${styles.registration_closed}`}>14:00</span>
        <span className={`${styles.registration} ${styles.registration_closed}`}>17:00</span>
        <span className={`${styles.registration} ${styles.registration_open}`}></span>
        <span className={`${styles.registration} ${styles.registration_open}`}></span>
      </div>
      <button className={styles.button} onClick={handleClick}></button>
    </article>
  )
}