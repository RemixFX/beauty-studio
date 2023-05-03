import Link from 'next/link'
import NavButton from '../NavButton/nav-button'
import styles from './header.module.scss'

export default function Header () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavButton/>
      </nav>
      <div className={styles.container}>
        <a href='tel:89883670897' title='Позвонить' className={styles.link}>8 (988) 367-08-97</a>
        <Link href='/enlist' className={styles.button}>Записаться</Link>
      </div>
    </header>
  )
}