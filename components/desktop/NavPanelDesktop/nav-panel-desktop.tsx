import styles from './nav-panel-desktop.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router";
import { LINKS } from '@/config/NavPanel.config'

export default function NavPanelDesktop() {

  const LinksDesktop = LINKS.filter(element => element.name !== 'Записаться')
  const { pathname, asPath } = useRouter()

  console.log(pathname.slice(- asPath.length), pathname, asPath)

  return (
    <nav className={styles.navigation}>
      {LinksDesktop.map((link) =>
        <Link href={link.src} key={link.name}
          className={`${styles.link} ${link.src === asPath || link.src === pathname ? styles.link_active : ''}`}>
          {link.name}
        </Link>
      )}
    </nav>
  )
}