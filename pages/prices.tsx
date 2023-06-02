import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Layout from "@/components/Layout/layout";
import Head from "next/head";
import styles from '@/styles/prices.module.scss'
import servicesData from "@/config/cardDataServices";

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
          {servicesData.map((service, index) =>
            <article key={index}>
              <h2 className={styles.title}>{service.heading}</h2>
              {service.categories ?
                service.categories.map((category, index) =>
                  <ul className={styles.list} key={index}>
                    <li className={styles.element}>
                      <p className={styles.name}>{category.heading}</p>
                      <div className={styles.value}>
                        <span className={styles.price}>{category.price}р.</span>
                        <span className={styles.time}>{category.time}</span>
                      </div>
                    </li>
                  </ul>
                )
                :
                <ul className={styles.list} key={index}>
                  <li className={styles.element}>
                    <p className={styles.name}>{service.heading}</p>
                    <div className={styles.value}>
                      <span className={styles.price}>{service.price}р.</span>
                      <span className={styles.time}>{service.time}</span>
                    </div>
                  </li>
                </ul>
              }
            </article>
          )}
        </section>
      </Layout>
      <Footer />
    </>
  )
}