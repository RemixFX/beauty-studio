import Header from "@/components/Header/header";
import Library from "@/components/Library/library";
import Head from "next/head";
import BROWS from '@/public/lib/works/brows';
import styles from '@/styles/works.module.scss'
import LIPS from "@/public/lib/works/lips";
import EYELASHES from "@/public/lib/works/eyelashes";
import Footer from "@/components/Footer/footer";

export default function Works() {

  return (
    <>
      <Head>
        <title>Работы мастера</title>
      </Head>
      <Header />
      <main className={styles.page}>
      <h1 className={styles.header}>Работы мастера</h1>
      <Library data={BROWS} header={'Татуаж бровей'} id='brows'/>
      <Library data={LIPS} header={'Татуаж губ'} id='lips' />
      <Library data={EYELASHES} header={'Татуаж век'} id='eyelashes' />
      </main>
      <Footer />
    </>
  )
}