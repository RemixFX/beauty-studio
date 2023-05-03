import { useState } from 'react'
import styles from './nav-button.module.scss'
import { useSpring, animated } from '@react-spring/web'


export default function NavButton () {

  const [isOpen, setIsOpen] = useState(false);

  const spring = useSpring({ left: isOpen ? '89%' : '3%'} )

  return (
    <animated.button style={spring} className={styles.button} onClick={() => setIsOpen(!isOpen)}>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
      <span className={`${styles.element} ${isOpen ? styles.element_open : ''}`}></span>
    </animated.button>
  )
} 