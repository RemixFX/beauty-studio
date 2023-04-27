import styles from './library.module.scss'
import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure';
import INextImage from '@/types/INextImage';

type LibraryProps = {
  data: INextImage[];
  header: string;
  id?: string;
  setFullScreen: (e: MouseEvent<HTMLImageElement>) => void;
}

export default function Library({ data, header, setFullScreen }: LibraryProps) {

  const scrollElement = useRef<HTMLDivElement>(null)
  const [ref, { width }] = useMeasure()
  //const imageWidth = Math.floor(width)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const roundPosition = Math.round(scrollPosition / width) * width;

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
      setScrollPosition(Math.round(scrollPosition))
      scrollElement.current.scrollBy({
        left: scrollPosition === roundPosition ? -width : roundPosition - scrollPosition,
        behavior: "smooth"
      })
      
    }
  }

  const clickNext = () => {
    const maxWidth = width * (data.length - 1)
    if (scrollPosition === maxWidth) return
    if (scrollElement.current) {  
      setScrollPosition(Math.round(scrollPosition))   
      scrollElement.current.scrollBy({
        left: scrollPosition === roundPosition ? width : roundPosition - scrollPosition,
        behavior: "smooth",
      })
      
    }
  }

  return (
    <article className={styles.content}>
      <h2 className={styles.header}>{header}</h2>
      <span>scrollPosition: {scrollPosition}</span>
      <span>roundPosition: {roundPosition}</span>
      <span>width: {width}</span>
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
              onClick={(e) => setFullScreen(e)}
            />
          )}
        </div>
      </div>
    </article>
  )
}