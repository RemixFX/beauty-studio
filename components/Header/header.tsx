import Link from 'next/link'
import styles from './header.module.scss'

export default function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}></nav>
      <div className={styles.container}>
        <a href='tel:89883670897' title='Позвонить' className={styles.link}>8 (988) 367-08-97</a>
        <Link href='/enlist' className={styles.button}>Записаться</Link>
      </div>
    </header>
  )
}