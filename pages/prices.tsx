import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import styles from '@/styles/prices.module.scss'

export default function Prices() {
  return (
    <>
      <Head>
        <title>Цены на татуаж</title>
      </Head>
      <Header />
      <Layout>
        <section className={styles.content}>
          <h1 className={styles.header}>Цены</h1>
          <article>
            <h2 className={styles.title}>Татуаж бровей</h2>
            <ul className={styles.list}>
              <li className={styles.element}>
                <p className={styles.name}>Пудровое напыление</p>
                <div className={styles.value}>
                  <span className={styles.price}>3000р.</span>
                  <span className={styles.time}>1.5ч.</span>
                </div>
              </li>
              <li className={styles.element}>
                <p className={styles.name}>Пудровое напыление</p>
                <div className={styles.value}>
                  <span className={styles.price}>3000р.</span>
                  <span className={styles.time}>1.5ч.</span>
                </div>
              </li>
              <li className={styles.element}>
                <p className={styles.name}>Пудровое напыление</p>
                <div className={styles.value}>
                  <span className={styles.price}>3000р.</span>
                  <span className={styles.time}>1.5ч.</span>
                </div>
              </li>
            </ul>
          </article>

        </section>
      </Layout>
      <Footer />
    </>
  )
}