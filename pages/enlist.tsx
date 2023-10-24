import Head from "next/head";
import styles from '@/styles/enlist.module.scss'
import Link from "next/link";
import Footer from "@/components/Footer/footer";
import Layout from "@/components/Layout/layout";
import NavPanel from "@/components/NavPanel/nav-panel";
import NextNProgress from 'nextjs-progressbar'
import { useRouter } from "next/router";

export default function Enlist() {

  const router = useRouter()

  return (
    <><Head>
      <title>Онлайн запись</title>
    </Head>
      <NextNProgress />
      <div className={styles.navigation}>
        <nav className={styles.return} onClick={() => router.back()}>
          &#10229; Вернуться
        </nav>
        <NavPanel />
      </div>
      <Layout>
        <section className={styles.content}>
          <h1 className={styles.header}>Запись</h1>
          <p className={styles.description}>есть несколько способов записаться:</p>
          <ul className={styles.list}>
            <li>
              <Link href={{
                pathname: '/enlist/calendar',
                query: router.query
              }}
                className={`${styles.button} ${styles.button_calendar}`}>Онлайн</Link>
            </li>
            <li>
              <Link href="https://wa.me/+79883670897?text=Здравствуйте!%20Хочу%20записаться%20на%20процедуру"
                className={`${styles.button} ${styles.button_whatsapp}`}>Через WhatsApp</Link>
            </li>
            <li>
              <Link href="https://t.me/ilonkaizmaylova"
                className={`${styles.button} ${styles.button_telegram}`}>Через Telegram</Link>
            </li>
          </ul>
          <p className={styles.description}>или попросить консультацию:</p>
          <ul className={styles.list}>
            <li>
              <Link href='/call-back' className={`${styles.button} ${styles.button_phone}`}>Оставить телефон</Link>
            </li>
            <li>
              <Link href="https://wa.me/+79883670897?text=Здравствуйте!%20Хочу%20проконсультироваться"
                className={`${styles.button} ${styles.button_whatsapp}`}>Написать в WhatsApp</Link>
            </li>
          </ul>
          <p className={styles.description}>посмотреть доступные даты:</p>
          <ul className={styles.list}>
            <li>
              <Link href='/enlist/calendar' className={`${styles.button} ${styles.button_calendar}`}>В календаре</Link>
            </li>
          </ul>
        </section>
      </Layout>
      <Footer />

    </>
  )
}

