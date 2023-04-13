import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/header'
import Description from '@/components/Description/description'
import Works from '@/components/Works/works'
import { BROWS_DESCRIPTION } from '@/config/const.js'
import Footer from '@/components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Студия татуажа Илоны Измайловой</title>
        <meta name="description" content="татуаж Краснодар" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Description />
        <Works pathname='/brows.jpg' id="brows"
          heading='Перманентный татуаж бровей'
          description={BROWS_DESCRIPTION} />
        <Works pathname='/lips.png' id="lips"
          heading='Татуаж губ'
          description={BROWS_DESCRIPTION} />
        <Works pathname='/eyelashes.jpg' id="eyelashes"
          heading='Татуаж век'
          description={BROWS_DESCRIPTION} />
        <Works pathname='/correction.jpg' id="correction"
          heading='Коррекция татуажа'
          description={BROWS_DESCRIPTION} />
        <Works pathname='/overlap.jpg' id="overlap"
          heading='Перекрытие татуажа'
          description={BROWS_DESCRIPTION} />
      </main>
      <Footer />
    </>
  )
}
