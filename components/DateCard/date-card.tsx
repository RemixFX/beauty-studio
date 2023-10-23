import { useRouter } from 'next/router';
import styles from './date-card.module.scss'
import { ICalendarQuery, IEntryComponent } from '@/pages/enlist/calendar';

type DateCardProps = {
  openForm: (dateQuery: ICalendarQuery) => void;
  entry: IEntryComponent
  isClosed: boolean | undefined
  error: boolean
}

export default function DateCard({ openForm, entry, isClosed, error }: DateCardProps) {

  const { query } = useRouter()

  const selectDate = () => {
    const dateQuery = {
      ...query,
      dateString: entry.date.dateString,
      day: entry.date.day,
      month: entry.date.month,
      closedTime: entry.time,
    }
    openForm(dateQuery)
  }

  return (
    <article className={styles.card}>
      <p className={styles.date}>
        <span className={styles.number}>{entry.date.day}</span>
        {entry.date.month}
      </p>
      {isClosed ?
        <div className={`${styles.container} ${styles.container_closed}`}>
          <p className={styles.message}>нет записи на текущий день</p>
        </div>
        :
      <div className={styles.container}>
        <span className={`${styles.registration} ${entry.time[0] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[0]}</span>
        <span className={`${styles.registration} ${entry.time[1] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[1]}</span>
        <span className={`${styles.registration} ${entry.time[2] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[2]}</span>
        <span className={`${styles.registration} ${entry.time[3] ? styles.registration_closed :
          error ? styles.registration_error : styles.registration_open}`}>{error ? 'no data' : entry.time[3]}</span>
      </div>}
      <button className={styles.button} title={entry.time.length === 4 || isClosed ? 'Нет записи' : 'Записаться'}
        disabled={entry.time.length === 4 || isClosed ? true : false} onClick={selectDate}></button>
    </article>
  )
}