import Link from 'next/link'
import NavPanel from '../NavPanel/nav-panel'
import styles from './header.module.scss'
import NavPanelDesktop from '../desktop/NavPanelDesktop/nav-panel-desktop'

export default function Header () {


  return (

    <header className={styles.header}>
      <NavPanel/>
      <NavPanelDesktop/>
      <div className={styles.container}>
        <a href='tel:89883670897' title='Позвонить' className={styles.link}>8 (988) 367-08-97</a>
        <Link href='/enlist' className={styles.button}>Записаться</Link>
      </div>
    </header>
  )
}