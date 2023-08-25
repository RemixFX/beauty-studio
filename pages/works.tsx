import Header from "@/components/Header/header";
import Library from "@/components/Library/library";
import Head from "next/head";
import BROWS from '@/public/lib/works/brows';
import styles from '@/styles/works.module.scss'
import LIPS from "@/public/lib/works/lips";
import EYELASHES from "@/public/lib/works/eyelashes";
import Footer from "@/components/Footer/footer";
import Link from "next/link";

export default function Works() {

  return (
    <>
      <Head>
        <title>Работы мастера</title>
      </Head>
      <Header />
      <section className={styles.page}>
        <h1 className={styles.header}>Работы мастера</h1>
        <nav className={styles.navigate}>
          <ul className={styles.links}>
            <li>
              <Link href='#brows' className={styles.link}>
                перманентный макияж бровей &#10230;
              </Link>
            </li>
            <li>
              <Link href='#lips' className={styles.link}>
                перманентный макияж губ &#10230;
              </Link>
            </li>
            <li>
              <Link href='#eyelashes' className={styles.link}>
                перманентный макияж век &#10230;
              </Link>
            </li>
          </ul>
        </nav>
        <Library data={BROWS} header={'Перманентный макияж бровей'} id='brows' />
        <Library data={LIPS} header={'Перманентный макияж губ'} id='lips' />
        <Library data={EYELASHES} header={'Перманентный макияж век'} id='eyelashes' />
      </section>
      <Footer />
    </>
  )
}