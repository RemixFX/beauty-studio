import Image from 'next/image'
import Link from 'next/link'
import { useTrail, animated } from '@react-spring/web'
import styles from './nav-list.module.scss'
import logo from '@/public/lib/logo/logo_type1.png'
import { LINKS } from '@/config/NavPanel.config'

type NavProps = {
  isOpen: boolean;
  handleToggle: () => void;
}

export default function NavList ({handleToggle, isOpen}: NavProps) {

  const trail = useTrail(LINKS.length,
    {
      from: { x: -300 },
      x: isOpen ? 0 : -300,
      config: { mass: 5, tension: 2000, friction: 160 },
    },
  )

  const handleClick = (nameLink: string) => {
    if (nameLink === 'Контакты') {
      handleToggle()
    }
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {trail.map((style, index) => (
          <animated.li className={styles.element} style={style} key={index}>
            <Link href={LINKS[index].src} onClick={() => handleClick(LINKS[index].name)}>{LINKS[index].name}</Link>
          </animated.li>
        ))}
      </ul>
      <Image src={logo} alt={'студия татуажа Илоны Измайловой'}
       className={`${styles.image} ${isOpen ? styles.image_open : ''}`} />
    </div>
  )
}