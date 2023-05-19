import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useTrail, animated } from '@react-spring/web'
import styles from './nav-list.module.scss'
import logo from '@/public/lib/logo/logo_type1.png'
import { LINKS } from '@/config/NavPanel.config'

type NavProps = {
  isOpen: boolean;
  handleToggle: () => void;
}

export default function NavList({ handleToggle, isOpen }: NavProps) {

  const pathname = usePathname()
  const trail = useTrail(LINKS.length,
    {
      from: { x: -300 },
      x: isOpen ? 0 : -300,
      config: { mass: 5, tension: 2000, friction: 160, clamp: true },
    },
  )

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {trail.map((style, index) => {
          const link = LINKS[index]
          const isActive = pathname.startsWith(link.src) || (pathname === '/' && link.src === '/#services')
          console.log(pathname, link.src)
          return (
            <animated.li className={styles.element} style={style} key={index}
            content={isActive ?'●' : ''} >
              <Link className={styles.link} href={link.src}
                onClick={handleToggle}>{link.name}</Link>
            </animated.li>
          )
        })}
      </ul>
      <Image src={logo} alt={'студия татуажа Илоны Измайловой'}
        className={`${styles.image} ${isOpen ? styles.image_open : ''}`} />
    </div>
  )
}