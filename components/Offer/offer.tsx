import Link from 'next/link'
import styles from './offer.module.scss'

export default function Offer({id}: {id?: string}) {
  
  return (
    <>
      <div className={styles.offer}>
        <p className={styles.price}>Цена: 3000р.</p>
        <p className={styles.execution}>Время выполнения: ~1.5ч</p>
      </div>
      <div className={styles.buttons}>
        <Link href='/enlist'  className={styles.link}>Записаться</Link>
        <Link href={{
          pathname: '/works',
          hash: id
        }} scroll={false} className={styles.link}>Посмотреть работы мастера</Link>
      </div>
    </>
  )
}