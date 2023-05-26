import styles from './card.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react';
import { IService } from '@/types/IServices';

interface CardProps extends IService {
  children?: ReactNode;
}

export default function Card ({id, pathname, heading, description, children, type}: CardProps) {
  return(
    <article className={styles.container} id={id} style={{marginBottom: '40px' /* marginTop: type === 'inCard' ? '0' : '40px' */}}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading}/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
      {type === 'card' && 
        <p className={styles.enum}>{heading} имеет следующие разновидности:</p>
      }
      {children}
    </article>
  )
}