import { useState } from 'react'
import styles from './date-card.module.scss'

type DateCardProps = {
  handleClick: () => void;
  date: Date
}

const arrMonthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export default function DateCard ({handleClick, date}: DateCardProps) {

  return (
    <article className={styles.card}>
      <p className={styles.date}>
        <span className={styles.number}>{date.getDate()}</span>
        {arrMonthName[date.getMonth()]}
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