import styles from './nav-panel-desktop.module.scss'
import Link from 'next/link'
import { LINKS } from '@/config/NavPanel.config'

export default function NavPanelDesktop () {

  const LinksDesktop = LINKS.filter(element => element.name !== 'Записаться')
  
  return(
    <nav className={styles.navigation}>
      {LinksDesktop.map((link) => 
        <Link href={link.src} key={link.name} className={styles.link}>{link.name}</Link>
      )}
    </nav>
  )
}