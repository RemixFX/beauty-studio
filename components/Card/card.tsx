import styles from './card.module.scss'
import Image from 'next/image'
import { MouseEvent, ReactNode } from 'react';
import { ICardService } from '@/types/ICardService';

interface CardProps extends ICardService {
  children?: ReactNode;
  sendCardData?: ({ ...args }: ICardService) => void
}

export default function Card({
  id,
  pathname,
  heading,
  description,
  children,
  type,
  categories,
  price, time,
  sendCardData
}: CardProps) {

  const handleClickCard = () => {
    if (sendCardData) {
      sendCardData(
        {
          id,
          pathname,
          heading,
          description,
          type,
          categories,
          price,
          time
        }
      )
    } else return
  }

  return (
    <article className={styles.container} id={id}>
      <figure className={styles.figure} onClick={handleClickCard}>
        <Image width={380} height={380} src={pathname} alt={heading} sizes='33vw'/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
      {type === 'card' &&
        <p className={styles.categories}>{heading} имеет следующие разновидности:</p>}
      {children}
    </article>
  )
}