import Link from 'next/link'
import styles from './offer.module.scss'

type OfferProps = {
  id: string;
  name?: string;
  price?: number;
  time?: string; 
}

export default function Offer({id, name, price, time}: OfferProps) {
  
  return (
    <>
      <div className={styles.offer}>
        <p className={styles.price}>Цена: {price}р.</p>
        <p className={styles.execution}>Время выполнения: {time}</p>
      </div>
      <div className={styles.buttons}>
        <Link href={{
          pathname: '/enlist',
          query: {service: id, category: name}
        }} className={styles.link}>Записаться</Link>
        <Link href={{
          pathname: '/works',
          hash: '#' + id
        }} scroll={false} className={styles.link}>Посмотреть работы мастера</Link>
      </div>
    </>
  )
}