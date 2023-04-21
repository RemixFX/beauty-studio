import styles from './offer.module.scss'

export default function Offer () {
  return (
    <>
    <div className={styles.offer}>
      <p className={styles.price}>Цена: 3000р.</p>
      <p className={styles.execution}>Время выполнения: ~1.5ч</p>
    </div>
    <div className={styles.buttons}>
    <button className={styles.link}>Записаться</button>
    <button className={styles.link}>Посмотреть работы мастера</button>
    </div>
    </>
  )
}