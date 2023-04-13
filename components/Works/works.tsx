import styles from './works.module.scss'
import Image from 'next/image'

type WorksProps = {
  id: string;
  pathname: string;
  heading: string;
  description: string;
}

export default function Works ({id, pathname, heading, description}: WorksProps) {
  return(
    <article className={`${styles.container} ${id}`} id={id}>
      <figure className={styles.figure}>
        <Image width={380} height={380} src={pathname} alt={heading}/>
        <figcaption className={styles.heading}>{heading}</figcaption>
      </figure>
      <p className={styles.description}>{description}</p>
    </article>
  )
}