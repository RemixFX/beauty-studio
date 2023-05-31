import DateCard from '@/components/DateCard/date-card'
import NavPanel from '@/components/NavPanel/nav-panel'
import styles from '@/styles/calendar.module.scss'
import Head from 'next/head'
import { useState } from 'react'

export default function Calendar() {

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
    
    </>
  )
}