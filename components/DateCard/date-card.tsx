import styles from './date-card.module.scss'
import { IEntryComponent } from '@/pages/enlist/calendar';

type DateCardProps = {
  handleClick: () => void;
  entry: IEntryComponent
  error: boolean
}

const arrMonthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export default function DateCard({ handleClick, entry, error }: DateCardProps) {

  return (
    <article className={styles.card}>
      <p className={styles.date}>
        <span className={styles.number}>{entry.date.getDate()}</span>
        {arrMonthName[entry.date.getMonth()]}
      </p>
      <div className={styles.container}>
        <span className={`${styles.registration} ${entry.time[0] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[0]}</span>
        <span className={`${styles.registration} ${entry.time[1] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[1]}</span>
        <span className={`${styles.registration} ${entry.time[2] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[2]}</span>
        <span className={`${styles.registration} ${entry.time[3] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[3]}</span>
      </div>
      <button className={styles.button} title={entry.time.length === 4 ? 'Нет записи' : 'Записаться'}
       disabled={entry.time.length === 4 ? true : false} onClick={handleClick}></button>
    </article>
  )
}