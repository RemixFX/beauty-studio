import styles from './library.module.scss'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import useMeasure from 'react-use-measure';
import INextImage from '@/types/INextImage';
import { BLUR_DATA_URL } from '@/config/consts';

type LibraryProps = {
  data: INextImage[];
  header: string;
  id?: string;
}

export default function Library({ data, header, id}: LibraryProps) {

  const scrollElement = useRef<HTMLDivElement>(null)
  const [ref, { width }] = useMeasure({ offsetSize: true })
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const roundPosition = Math.round(scrollPosition / width) * width;

  const disableLeftButton = useMemo(() => {
    if (roundPosition === 0) return true
  }, [roundPosition])

  const disableRightButton = useMemo(() => {
    if (roundPosition === width * (data.length - 1)) return true
  }, [data.length, roundPosition, width])

  useEffect(() => {
    const element = scrollElement.current;
    function handleScroll() {
      setScrollPosition(element!.scrollLeft);
    }
    element && element.addEventListener('scroll', handleScroll);
    return () => {
      element && element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickPrevious = () => {
    if (scrollPosition === 0) return
    if (scrollElement.current) {
      scrollElement.current.scrollBy({
        left: Math.round(scrollPosition) === roundPosition ? -width : roundPosition - scrollPosition,
        behavior: "smooth"
      })
    }
  }

  const clickNext = () => {
    const maxWidth = width * (data.length - 1)
    if (scrollPosition === maxWidth) return
    if (scrollElement.current) {
      scrollElement.current.scrollBy({
        left: Math.round(scrollPosition) === roundPosition ? width : roundPosition - scrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <article className={styles.content} id={id}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.layout} >
        <span className={`${styles.arrows} ${styles.arrows_left} ${disableLeftButton && styles.arrows_disabled}`}
          onClick={clickPrevious}></span>
        <span className={`${styles.arrows} ${styles.arrows_right} ${disableRightButton && styles.arrows_disabled}`}
          onClick={clickNext}></span>
        <div className={styles.images} ref={scrollElement}>
          {data.map((img) =>
            <Image src={img.src}
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
              alt={img.alt}
              key={img.id}
              height={img.height}
              width={img.width}
              className={styles.image}
              ref={ref}
            />
          )}
        </div>
      </div>
    </article>
  )
}