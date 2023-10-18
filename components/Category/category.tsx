'use client';
import { MouseEvent, ReactNode, useRef } from 'react'
import styles from './category.module.scss'
import { useSpring, useSpringRef, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure';

type CategoryProps = {
  heading: string;
  children: ReactNode;
}

export default function Category({ heading, children }: CategoryProps) {
  const [ref, { height: viewHeight }] = useMeasure()
  const scrollElement = useRef<HTMLDivElement>(null)

  const api = useSpringRef()
  const springs = useSpring({
    ref: api,
    from: { height: 0, opacity: 0, zIndex: -1 }
  })

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {

    api.start({
      to: {
        opacity: springs.opacity.get() === 1 ? 0 : 1,
        height: springs.height.get() === viewHeight ? 0 : viewHeight,
        zIndex: springs.zIndex.get() === -1 ? 1 : -1
      },

      // Переопределение значений в случае если картинка не успела загрузиться при открытии
      // защита от сбоя при медленном интернете
      onResolve (result, ctrl) {
        if (ctrl.get().height === 0) {
          springs.opacity.set(0)
          springs.zIndex.set(-1)
        }
      },

      config: { duration: 370 },

      onStart(result, ctrl) {
        if (ctrl.get().opacity < 0.8) {
          scrollElement.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    })

    if (e.currentTarget.classList.contains(styles.transform)) {
      e.currentTarget.classList.remove(styles.transform)
    }
    else e.currentTarget.classList.add(styles.transform)
  }

  return (
    <>
      <button className={styles.button} onClick={(e) => handleClick(e)}>{heading}</button>
      <animated.div style={springs} className={styles.content} ref={scrollElement}>
        <div ref={ref}>{children}</div>
      </animated.div>
    </>

  )
}
