import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import NavButton from '../NavButton/nav-button'
import NavList from '../NavList/nav-list'
import styles from './nav-panel.module.scss'

export default function NavPanel() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const buttonStyleProps = useSpring({ left: isOpen ? '89%' : '3%'} )
  const listStyleProps = useSpring({ width: isOpen ? '100%' : '0%', 
  opacity: isOpen ? 1 : 0,
  config: {mass: 1, tension: 310, friction: 40}})

  return (
    <nav className={styles.navigation}>
      <animated.div className={styles.container} style={buttonStyleProps}>
      <NavButton 
      isOpen={isOpen}
      handleToggle={handleToggle }
      />
      </animated.div>
      <animated.div className={styles.list} style={listStyleProps}>
        <NavList isOpen={isOpen} handleToggle={handleToggle }/>
      </animated.div>
    </nav>
  )
}