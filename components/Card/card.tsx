import styles from './card.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react';

type CategoryProps = {
  id?: string;
  pathname: string;
  heading: string;
  description: string;
  children?: ReactNode;
  category?: boolean;
}

export default function Card ({id, pathname, heading, description, children, category}: CategoryProps) {
  return(
    <article className={styles.container} id={id} style={{marginTop: category ? '0' : '40px'}}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading}/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
      {children}
    </article>
  )
}