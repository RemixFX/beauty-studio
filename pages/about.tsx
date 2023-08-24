import Head from "next/head";
import Image from "next/image"
import styles from '@/styles/about.module.scss'
import master from '@/public/lib/about/images/master.jpeg'
import Layout from "@/components/Layout/layout";
import Header from "@/components/Header/header";
import Library from "@/components/Library/library";
import WORKING_MASTER from "@/public/lib/about";
import Footer from "@/components/Footer/footer";
import Link from "next/link";


export default function About() {
  return (
    <>
      <Head>
        <title>О мастере</title>
      </Head>
      <Header />
      <Layout>
        <section className={styles.content}>
          <h1 className={styles.header}>О мастере</h1>
          <div className={styles.image}>
            <Image alt={'фото мастера'} src={master} />
          </div>
          < div className={styles.text}>
            <p className={styles.description}>Привет!</p>
            <p className={styles.description}>Веселая и жизнерадостная - так обо мне можно сказать в двух словах &#127773;</p>
            <p className={styles.description}>Люблю свою работу, называю это искусством.
              К каждой девушке у меня индивидуальный подход, что бы результат превзошел все ожидания.</p>
            <p className={styles.description}>Люблю консультировать.
              Для меня важно, что бы Вы остались довольны работой, поэтому буду поддерживать с Вами связь и после процедуры.</p>
          </div>
          <Library data={WORKING_MASTER} header={''} />
          <Link href={'/reviews'} className={styles.link}>Посмотреть отзывы</Link>
        </section>
      </Layout>
      <Footer />
    </>

  )
}