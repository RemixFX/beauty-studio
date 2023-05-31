import NavPanel from '@/components/NavPanel/nav-panel'
import styles from '@/styles/calendar.module.scss'
import Head from 'next/head'

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Записи на процедуру</title>
      </Head>
      <div className={styles.navigation}>
        <NavPanel />
      </div>
      <section className={styles.content}>
        <h1 className={styles.header}>Выберите подходящую дату</h1>
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
          <button className={styles.button}>
            </button>
        </article>
        <article className={styles.card}>
          <p className={styles.date}>
            <span className={styles.number}>31</span>
            мая
            </p>
          <div className={styles.container}>
            <span className={`${styles.registration} ${styles.registration_closed}`}>15:00</span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
          </div>
          <button className={styles.button}>
            </button>
        </article>
        <article className={styles.card}>
          <p className={styles.date}>
            <span className={styles.number}>1</span>
            апреля
            </p>
          <div className={styles.container}>
            <span className={`${styles.registration} ${styles.registration_closed}`}>11:00</span>
            <span className={`${styles.registration} ${styles.registration_closed}`}>15:00</span>
            <span className={`${styles.registration} ${styles.registration_closed}`}>17:30</span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
          </div>
          <button className={styles.button}>
            </button>
        </article>
        <article className={styles.card}>
          <p className={styles.date}>
            <span className={styles.number}>2</span>
            апреля
            </p>
          <div className={styles.container}>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
          </div>
          <button className={styles.button}>
            </button>
        </article>
        <article className={styles.card}>
          <p className={styles.date}>
            <span className={styles.number}>3</span>
            апреля
            </p>
          <div className={styles.container}>
            <span className={`${styles.registration} ${styles.registration_closed}`}>18:00</span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
          </div>
          <button className={styles.button}>
            </button>
        </article>
        <article className={styles.card}>
          <p className={styles.date}>
            <span className={styles.number}>4</span>
            апреля
            </p>
          <div className={styles.container}>
            <span className={`${styles.registration} ${styles.registration_closed}`}></span>
            <span className={`${styles.registration} ${styles.registration_closed}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
            <span className={`${styles.registration} ${styles.registration_open}`}></span>
          </div>
          <button className={styles.button}>
            </button>
        </article>
      </section>
    </>
  )
}