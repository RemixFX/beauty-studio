import styles from './works.module.scss'
import Image from 'next/image'

type WorksProps = {
  pathname: string;
  heading: string;
  description: string;
}

export default function Works ({pathname, heading, description}: WorksProps) {
  return(
    <article className={styles.container}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading}/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
    </article>
  )
}