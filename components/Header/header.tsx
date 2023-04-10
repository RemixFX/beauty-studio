import Image from 'next/image'
import styles from './header.module.scss'

export default function Header () {
  return (
    <header className={styles.header}>
      <nav>---</nav>
      <div className={styles.container}>
        <a href='tel:89883670897' title='Позвонить'>8 (988) 367-08-97</a>
        <button></button>
      </div>
    </header>
  )
}