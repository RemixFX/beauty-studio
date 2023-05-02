import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.scss'
import Header from '@/components/Header/header'
import Description from '@/components/Description/description'
import Card from '@/components/Card/card'
import { BROWS_DESCRIPTION } from '@/config/const.js'
import Footer from '@/components/Footer/footer'
import Category from '@/components/Category/category'
import Offer from '@/components/Offer/offer'
import Layout from '@/components/Layout/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Студия татуажа Илоны Измайловой</title>
        <meta name="description" content="татуаж Краснодар" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Description />
      </Layout>
      <main className={styles.main}>
        <Card pathname='/brows.jpg' id="brows"
          heading='Перманентный татуаж бровей'
          description={BROWS_DESCRIPTION}
          category={'card'}>
          <Category heading='Пудровое напыление'>
            <Card pathname='/brows.jpg'
              heading='Пудровое напыление'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Шантирование'>
            <Card pathname='/brows.jpg'
              heading='Шантирование'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Растушевка'>
            <Card pathname='/brows.jpg'
              heading='Растушевка'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
        </Card>
        <Card pathname='/lips.png' id="lips"
          heading='Татуаж губ'
          description={BROWS_DESCRIPTION}
          category={'card'}>
          <Category heading='Акварельный прокрас'>
            <Card pathname='/lips.png'
              heading='Акварельный прокрас'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Помадный эффект'>
            <Card pathname='/lips.png'
              heading='Помадный эффект'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='3D'>
            <Card pathname='/lips.png'
              heading='3D'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Нют'>
            <Card pathname='/lips.png'
              heading='Нют'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer id='lips' />
            </Card>
          </Category>
        </Card>
        <Card pathname='/eyelashes.jpg' id="eyelashes"
          heading='Татуаж век'
          description={BROWS_DESCRIPTION}
          category={'card'}>
          <Category heading='Стрелка с растушёвкой'>
            <Card pathname='/eyelashes.jpg'
              heading='Стрелка с растушёвкой'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Стрелка классическая'>
            <Card pathname='/eyelashes.jpg'
              heading='Стрелка классическая'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Стрелка мягкая(карандашная)'>
            <Card pathname='/eyelashes.jpg'
              heading='Стрелка мягкая(карандашная)'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Межресничный татуаж'>
            <Card pathname='/eyelashes.jpg'
              heading='Межресничный татуаж'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Нижнее веко'>
            <Card pathname='/eyelashes.jpg'
              heading='Нижнее веко'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer />
            </Card>
          </Category>
          <Category heading='Цветной'>
            <Card pathname='/eyelashes.jpg'
              heading='Цветной'
              description={BROWS_DESCRIPTION}
              category={'inCard'}>
              <Offer id='eye' />
            </Card>
          </Category>
        </Card>
        <Card pathname='/correction.jpg' id="correction"
          heading='Коррекция татуажа'
          description={BROWS_DESCRIPTION}
          category={'singleCard'}>
          <Offer />
        </Card>
        <Card pathname='/overlap.jpg' id="overlap"
          heading='Перекрытие татуажа'
          description={BROWS_DESCRIPTION}
          category={'singleCard'}>
          <Offer />
        </Card>
      </main>
      <Footer />
    </>
  )
}
