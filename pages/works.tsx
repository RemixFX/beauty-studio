import Header from "@/components/Header/header";
import Library from "@/components/Library/library";
import Head from "next/head";
import BROWS from '@/public/lib/works/brows';
import styles from '@/styles/works.module.scss'
import LIPS from "@/public/lib/works/lips";
import EYELASHES from "@/public/lib/works/eyelashes";
import Footer from "@/components/Footer/footer";
import { useEffect, useState, MouseEvent } from "react";


export default function Works() {

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const setFullScreen = (e: MouseEvent<HTMLImageElement>) => {
    isFullscreen ? document.exitFullscreen()
      :
      e.currentTarget.requestFullscreen()
  }

  return (
    <>
      <Head>
        <title>Работы мастера</title>
      </Head>
      <Header />
      <h1 className={styles.header}>Работы мастера</h1>
      <Library data={BROWS} header={'Татуаж бровей'} setFullScreen={setFullScreen} />
      <Library data={LIPS} header={'Татуаж губ'} setFullScreen={setFullScreen} id='lips' />
      <Library data={EYELASHES} header={'Татуаж век'} setFullScreen={setFullScreen} id='eye' />
      <Footer />
    </>
  )
}