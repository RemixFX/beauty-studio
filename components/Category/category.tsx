'use client';
import { ReactNode, useState } from 'react'
import styles from './category.module.scss'
import { useTransition, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure';

export default function Category({ children }: { children?: ReactNode }) {
  //const [ref, { height: viewHeight }] = useMeasure({offsetSize: true})
  const [isActive, setActive] = useState(false)
  const transitions = useTransition(isActive, {
    from: {height: '0', transform: 'translate3d(0,-100%,0) scale(0.5)', opacity: 0 },
    enter: {height: '570px', transform: 'translate3d(0,0%,0) scale(1)', opacity: 1 },
    leave: {height: '0', transform: 'translate3d(0,-100%,0) scale(0.5)', opacity: 0 },
    config: { duration: 430 }
  })

  const toggle = () => setActive(prev => !prev)

  return (
    <>
      <button className={styles.button} onClick={toggle}>Пудровое напыление</button>
      {
        transitions((props, item) => {
          return (
            item &&
            <animated.div style={props} className={styles.content} >
              {children}
            </animated.div>
          )
        })
      }

    </>
  )
}
