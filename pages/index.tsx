import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'
import Description from '@/components/Description/description'
import Card from '@/components/Card/card'
import Footer from '@/components/Footer/footer'
import Category from '@/components/Category/category'
import Offer from '@/components/Offer/offer'
import Layout from '@/components/Layout/layout'
import servicesData from '@/config/servicesData'

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
        {servicesData.map((service, index) =>
          <Card
            key={index}
            pathname={service.pathname}
            id={service.id}
            heading={service.heading}
            description={service.description}
            type={service.type}
          >
            {service.categories ?
              service.categories.map((category, index) =>
                <Category key={index} heading={category.heading}>
                  <Card
                    pathname={category.pathname}
                    id={category.id}
                    heading={category.heading}
                    description={category.description}
                    type={category.type}
                  >
                    <Offer
                      id={category.id}
                      price={category.price}
                      time={category.time}
                    />
                  </Card>
                </Category>
              )
              :
              <Offer
                id={service.id}
                price={service.price} 
                time={service.time}
                />
            }
          </Card>
        )}
      </main>
      <Footer />
    </>
  )
}
