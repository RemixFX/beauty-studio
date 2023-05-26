import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/header'
import Card from '@/components/Card/card'
import Footer from '@/components/Footer/footer'
import Category from '@/components/Category/category'
import Offer from '@/components/Offer/offer'
import Layout from '@/components/Layout/layout'
import servicesData from '@/config/servicesData'
import DescriptionTest from '@/components/DescriptionTest/descriptiontest'

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
        <DescriptionTest />
      </Layout>
      <main className={styles.main}>
        
      </main>
      <Footer />
    </>
  )
}
