'use client';
import { ReactNode } from 'react'
import styles from './category.module.scss'
import { useSpring, useSpringRef, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure';

export default function Category({ children }: { children?: ReactNode }) {
  const [ref, { height: viewHeight }] = useMeasure({ offsetSize: true })

  const api = useSpringRef() 
  const springs = useSpring({
    ref: api,
    from: { height: 0, opacity: 0, transform: 'translate3d(0,-100%,0) scale(0.5)' }
  })

  const handleClick = () => {
    api.start({
      to: {
        opacity: springs.opacity.get() === 1 ? 0 : 1,
        height: springs.height.get() === viewHeight ? 0 : viewHeight,
        transform: springs.transform.get() === 'translate3d(0,0%,0) scale(1)' ? 'translate3d(0,-100%,0) scale(0.5)' : 'translate3d(0,0%,0) scale(1)'
      },
      config: { duration: 430 }
    })
  }

  return (
    <>
      <button className={styles.button} onClick={handleClick}>Пудровое напыление</button>
      <animated.div style={springs} className={styles.content} >
        <div ref={ref}>{children}</div>
      </animated.div>
    </>

  )
}
