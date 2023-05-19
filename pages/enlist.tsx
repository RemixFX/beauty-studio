import Head from "next/head";
import styles from '@/styles/enlist.module.scss'
import Link from "next/link";
import Footer from "@/components/Footer/footer";
import Layout from "@/components/Layout/layout";
import NavPanel from "@/components/NavPanel/nav-panel";

export default function Enlist() {
  return (
    <><Head>
      <title>Онлайн запись</title>
    </Head>
    <div className={styles.navigation}>
      <NavPanel />
    </div>
      <Layout>
        <section className={styles.content}>
          <h1 className={styles.header}>Запись</h1>
          <p className={styles.description}>есть несколько способов записаться:</p>
          <Link href={'#'} className={`${styles.button} ${styles.button_calendar}`}>Онлайн</Link>
          <a href="https://wa.me/+79883670897?text=Здравствуйте!%20Хочу%20записаться%20на%20процедуру"
            className={`${styles.button} ${styles.button_whatsapp}`}>Через Whatsapp</a>
          <a href="https://t.me/ilonkaizmaylova"
            className={`${styles.button} ${styles.button_telegram}`}>Через Telegram</a>
          <p className={styles.description}>или попросить консультацию:</p>
          <a href="#" className={`${styles.button} ${styles.button_phone}`}>Оставить телефон</a>
          <a href="https://wa.me/+79883670897?text=Здравствуйте!%20Хочу%20проконсультироваться"
            className={`${styles.button} ${styles.button_whatsapp}`}>Написать в Whatsapp</a>
          <p className={styles.description}>посмотреть доступные даты:</p>
          <Link href={'#'} className={`${styles.button} ${styles.button_calendar}`}>В календаре</Link>
        </section>
      </Layout>
      <Footer />

    </>
  )
}

