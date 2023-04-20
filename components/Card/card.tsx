import styles from './card.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react';

type CardProps = {
  id?: string;
  pathname: string;
  heading: string;
  description: string;
  children?: ReactNode;
  category: 'inCard' | 'card' | 'singleCard';
}

export default function Card ({id, pathname, heading, description, children, category}: CardProps) {
  return(
    <article className={styles.container} id={id} style={{marginTop: category === 'inCard' ? '0' : '40px'}}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading}/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
      {category === 'card' && 
        <p className={styles.enum}>{heading} имеет следующие разновидности:</p>
      }
      {category !== 'card' &&
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
      }
      {children}
    </article>
  )
}