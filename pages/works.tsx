import Header from "@/components/Header/header";
import Library from "@/components/Library/library";
import Head from "next/head";
import BROWS from '@/public/lib/works/brows';
import styles from '@/styles/works.module.scss'


export default function Works () {
  return (
      <>
      <Head>
      <title>Работы мастера</title>
    </Head>
    <Header/>
    <h1 className={styles.header}>Работы мастера</h1>
    <Library data={BROWS} header={'Татуаж бровей'}/>
    <Library data={BROWS} header={'Татуаж губ'}/>
    </>
  )
}