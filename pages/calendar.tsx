import DateCard from '@/components/DateCard/date-card'
import EnlistForm from '@/components/EnlistForm/enlist-form'
import Footer from '@/components/Footer/footer'
import NavPanel from '@/components/NavPanel/nav-panel'
import styles from '@/styles/calendar.module.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Calendar() {

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Записи на процедуру</title>
      </Head>
      <div className={styles.navigation}>
        <NavPanel />
      </div>
      <section className={styles.content}>
        <h1 className={styles.header}>Выберите подходящую дату</h1>
        <DateCard handleClick={handleOpenModal}/>
      </section>
      {isOpen && <EnlistForm closeForm={() => setIsOpen(false)} query={router.query}/>}
      <Footer/>
    </>
  )
}