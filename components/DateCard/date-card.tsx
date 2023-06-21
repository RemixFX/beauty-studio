import { useRouter } from 'next/router';
import styles from './date-card.module.scss'
import { IEntryComponent } from '@/pages/enlist/calendar';
import { ParsedUrlQuery } from 'querystring';

type DateCardProps = {
  openForm: (dateQuery: ParsedUrlQuery) => void;
  entry: IEntryComponent
  error: boolean
}

export default function DateCard({ openForm, entry, error }: DateCardProps) {

  const { query } = useRouter()

  const selectDate = () => {
    const dateQuery = {...query, day: entry.date.day, month: entry.date.month}
    openForm(dateQuery)
  }

  return (
    <article className={styles.card}>
      <p className={styles.date}>
        <span className={styles.number}>{entry.date.day}</span>
        {entry.date.month}
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
       disabled={entry.time.length === 4 ? true : false} onClick={selectDate}></button>
    </article>
  )
}