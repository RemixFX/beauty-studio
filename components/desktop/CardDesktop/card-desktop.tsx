import { ICardService } from '@/types/ICardService'
import styles from './card-desktop.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react';

interface CardDesktopProps extends ICardService {
  children?: ReactNode;
}

export default function CardDesktop({
  id,
  pathname,
  heading,
  description,
  children,
  type
}: CardDesktopProps) {
  return (
    <article className={styles.card} id={id}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading} style={{ width: '100%' }} />
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <div className={styles.layout}>
        <p className={styles.description}>{description}</p>
        {type === 'card' &&
          <p className={styles.categories}>{heading} имеет следующие разновидности:</p>
        }
        {children}
      </div>
    </article>
  )
}