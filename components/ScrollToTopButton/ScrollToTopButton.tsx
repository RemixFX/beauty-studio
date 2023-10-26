import styles from './ScrollToTop.module.scss'
import { useScroll, animated } from '@react-spring/web'

export default function ScrollToTop() {

  const { scrollYProgress } = useScroll()
  const isBrowser = () => typeof window !== 'undefined'

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.container}>
    <animated.div style={{
      opacity: scrollYProgress.to(val => val - 0.23),
      display: scrollYProgress.to(val => val > 0.23 ? 'block' : 'none'),
    }}>
      <button className={styles.button} onClick={scrollToTop}></button>
    </animated.div>
    </div>
  )
}