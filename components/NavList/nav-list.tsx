import Image from 'next/image'
import Link from 'next/link'
import { useTrail, animated } from '@react-spring/web'
import styles from './nav-list.module.scss'
import logo from '@/public/lib/logo/logo_type1.png'
import { LINKS } from '@/config/NavPanel.config'



export default function NavList({ isOpen }: { isOpen: boolean }) {

  const trail = useTrail(LINKS.length,
    {
      from: { x: -300 },
      x: isOpen ? 0 : -300,
      config: { mass: 5, tension: 2000, friction: 160 },
    },
  )

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {trail.map((style, index) => (
          <animated.li className={styles.element} style={style} key={index}>
            <Link href={LINKS[index].src}>{LINKS[index].name}</Link>
          </animated.li>
        ))}
      </ul>
      <Image src={logo} alt={'студия татуажа Илоны Измайловой'}
       className={`${styles.image} ${isOpen ? styles.image_open : ''}`} />
    </div>
  )
}