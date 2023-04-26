import styles from './library.module.scss'
import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure';
import INextImage from '@/types/INextImage';

export default function Library({data, header, id}: {data: INextImage[], header: string, id?: string}) {

  const scrollElement = useRef<HTMLDivElement>(null)
  const [ref, {width}] = useMeasure()
  const [scrollPosition, setScrollPosition] = useState(0);

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
      const roundPosition = Math.round(scrollPosition / width) * width
      scrollElement.current.scrollTo({
        left: scrollPosition === roundPosition ? roundPosition - width : roundPosition,
        behavior: "smooth"
      })
    }
  }
  
  const clickNext = () => {
    const maxWidth = width * (data.length - 1)
    if (scrollPosition === maxWidth) return
    if (scrollElement.current) {
      const roundPosition = Math.round(scrollPosition / width) * width
      scrollElement.current.scrollTo({
        left: scrollPosition === roundPosition ? roundPosition + width : roundPosition,
        behavior: "smooth"
      })
    }
  }

  const zoomImage = (e: MouseEvent<HTMLImageElement>) => {
    if (e.currentTarget.classList.contains(styles.image_zoom)) {
      e.currentTarget.classList.remove(styles.image_zoom)
    }
    else e.currentTarget.classList.add(styles.image_zoom)
  }

  return (
    <article className={styles.content} id={id}>
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