//SSG+ISR
import Head from 'next/head'
import client from "@/apollo-client";
import DateCard from '@/components/DateCard/date-card'
import Footer from '@/components/Footer/footer'
import NavPanel from '@/components/NavPanel/nav-panel'
import useDate, { FormattedDate } from '@/hooks/useDate'
import styles from '@/styles/calendar.module.scss'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getEntries } from '@/api/entries';
import { ApolloQueryResult } from '@apollo/client';
import { useMemo } from 'react';

interface Entry {
  id: number
  name: string
  phone: string
  service: string
  category: string | null
  date: Date
  time: string
}

interface Entries {
  getEntries: Entry[]
}

export interface IEntryComponent {
  date: Omit<FormattedDate, 'timestamp'>
  time: string[]
}

export const getStaticProps: GetStaticProps<{ entries: Entry[], error: boolean }> = async () => {
  try {
    const { data }: ApolloQueryResult<Entries> = await client.query({ query: getEntries })
    return { props: { entries: data.getEntries, error: false }, revalidate: 10 }
  }
  catch (error) {
    return { props: { entries: [], error: true }, revalidate: 10 }
  }
}

export default function Calendar({ entries, error }: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter()
  const { getNextDatesInterval } = useDate()
  const dates = getNextDatesInterval(30, 18)

  const redirectToForm = (query: any) => {
    router.push({
      pathname: '/enlist/calendar/enlist-form',
      query
    })
  }

  const dataEntries = useMemo(() => {
    let dataEntries: IEntryComponent[] = []
    for (let i = 0; i < dates.length; i++) {
      let entryTime: string[] = []
      for (let indexEntries = 0; indexEntries < entries.length; indexEntries++) {
        if (Number(entries[indexEntries].date) === dates[i].timestamp) {
          entryTime.push(entries[indexEntries].time)
        }
      }
      dataEntries.push({ date: { day: dates[i].day, month: dates[i].month }, time: entryTime.sort() })
    }
    return dataEntries
  }, [entries, dates])

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
        <p className={styles.paragraph}>доступное время: с 9:00 до 20:00</p>
        {dataEntries.map((entry, index) =>
          <DateCard openForm={redirectToForm} entry={entry} key={index} error={error} />
        )}
      </section>
      <Footer />
    </>
  )
}