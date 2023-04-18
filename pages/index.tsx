import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/header'
import Description from '@/components/Description/description'
import Card from '@/components/Card/card'
import { BROWS_DESCRIPTION } from '@/config/const.js'
import Footer from '@/components/Footer/footer'
import Category from '@/components/Category/category'

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
        <Card pathname='/brows.jpg' id="brows"
          heading='Перманентный татуаж бровей'
          description={BROWS_DESCRIPTION}>
          <Category>
            <Card pathname='/brows.jpg'
              heading='Пудровое напыление'
              description={BROWS_DESCRIPTION}
              category={true}>
            </Card>
          </Category>
        </Card>
        <Card pathname='/lips.png' id="lips"
          heading='Татуаж губ'
          description={BROWS_DESCRIPTION} />
        <Card pathname='/eyelashes.jpg' id="eyelashes"
          heading='Татуаж век'
          description={BROWS_DESCRIPTION} />
        <Card pathname='/correction.jpg' id="correction"
          heading='Коррекция татуажа'
          description={BROWS_DESCRIPTION} />
        <Card pathname='/overlap.jpg' id="overlap"
          heading='Перекрытие татуажа'
          description={BROWS_DESCRIPTION} />
      </main>
      <Footer />
    </>
  )
}
