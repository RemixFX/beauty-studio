import Head from "next/head";
import styles from '@/styles/reviews.module.scss'
import Header from "@/components/Header/header";
import REVIEWS from "@/public/lib/reviews";
import Image from "next/image";
import Footer from "@/components/Footer/footer";

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Отзывы клиентов</title>
      </Head>
      <Header />
      <section className={styles.content}>
        <h1 className={styles.header}>Отзывы</h1>
        <p className={styles.description}>Большое спасибо Вам что пишите отзывы,
          это больше всего мотивирует меня сделать работу, которой мы гордились бы вместе!</p>
        {REVIEWS.map((image) =>
          <article className={styles.container} key={image.id}>
            <Image
              className={styles.image}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </article>
        )}
      </section>
      <Footer />
    </>
  )
}