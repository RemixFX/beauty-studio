import styles from './library.module.scss'
import Image from 'next/image'
import { MouseEvent, useRef, useState } from 'react'
import useMeasure from 'react-use-measure';
import INextImage from '@/models/INextImage';

export default function Library({data, header}: {data: INextImage[], header: string}) {

  const scrollElement = useRef<HTMLDivElement>(null)
  const [ref, { width }] = useMeasure()
  const [length, setLength] = useState(0)

  const clickPrevious = () => {
    if (length === 0) return
    if (scrollElement.current)
      scrollElement.current.scrollTo({
        left: length - width,
        behavior: "smooth"
      })
    setLength(length - width)
  }

  const clickNext = () => {
    const maxWidth = width * (data.length - 1)
    if (length === maxWidth) return
    if (scrollElement.current)
      scrollElement.current.scrollTo({
        left: length + width,
        behavior: "smooth"
      })
    setLength(length + width)
  }

  const zoomImage = (e: MouseEvent<HTMLImageElement>) => {
    if (e.currentTarget.classList.contains(styles.image_zoom)) {
      e.currentTarget.classList.remove(styles.image_zoom)
    }
    else e.currentTarget.classList.add(styles.image_zoom)
  }

  return (
    <article className={styles.content}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.layout} >
        <span className={`${styles.arrows} ${styles.arrows_left}`}
          onClick={clickPrevious}></span>
        <span className={`${styles.arrows} ${styles.arrows_right}`}
          onClick={clickNext}></span>
        <div className={styles.images} ref={scrollElement}>
          {data.map((img) =>
            <Image src={img.src}
              alt={img.alt}
              key={img.id}
              height={img.height}
              width={img.width}
              className={styles.image}
              ref={ref}
              onClick={e => zoomImage(e)}
            />
          )}
        </div>
      </div>
    </article>
  )
}