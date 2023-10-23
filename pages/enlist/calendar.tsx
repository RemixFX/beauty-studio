//SSR
import Head from 'next/head'
import client from "@/apollo-client";
import DateCard from '@/components/DateCard/date-card'
import Footer from '@/components/Footer/footer'
import NavPanel from '@/components/NavPanel/nav-panel'
import useDate, { FormattedDate } from '@/hooks/useDate'
import styles from '@/styles/calendar.module.scss'
import NextNProgress from 'nextjs-progressbar'
import { useRouter } from 'next/router'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getEntries } from '@/api/entries';
import { ApolloQueryResult } from '@apollo/client';
import { useMemo } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { BLOCK_TIME, DISPLAYED_DAY, END_WORK, START_WORK } from '@/config/calendar.config';
import { getClosedDays } from '@/api/closed-days';

interface Entry {
  date: Date
  time: string
}

interface Entries {
  getEntries: Entry[]
}

export interface IEntryComponent {
  date: FormattedDate
  time: string[]
}

export interface ICalendarQuery extends ParsedUrlQuery {
  service?: string;
  category?: string;
  day?: string;
  dateString: string;
  month?: string;
  monthNumber?: string;
  closedTime?: string[] | string;
}

interface ClosedDay {
  id: string
  date: string
}

interface ClosedDays {
  getClosedDaysForUser: ClosedDay[]
}

const checkIsClosed = (closedDay: ClosedDay[], calendarDay: number) => {
  if (closedDay === undefined || closedDay.length === 0) return
  for (let day of closedDay) {
     if (Number(day.date) === calendarDay) return true
  }
  return false
}

export const getServerSideProps: GetServerSideProps<{ entries: Entry[], closedDays: ClosedDay[], error: boolean }> = async () => {
  try {
    const [dataEntries, dataClosedDays]: [ApolloQueryResult<Entries>, ApolloQueryResult<ClosedDays>] = await Promise.all([
      client.query({ query: getEntries }),
      client.query({ query: getClosedDays })
    ])
    return {
      props: {
        entries: dataEntries.data.getEntries,
        closedDays: dataClosedDays.data.getClosedDaysForUser,
        error: false
      }
    }
  }
  catch {
    return { props: { entries: [], closedDays: [], error: true } }
  }
}

export default function Calendar({ entries, closedDays, error }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const router = useRouter()
  const { getNextDatesInterval } = useDate()
  const dates = getNextDatesInterval(DISPLAYED_DAY, BLOCK_TIME)

  const redirectToForm = (query: any) => {
    router.replace({
      pathname: '/enlist/calendar/enlist-form',
      query
    }, '/enlist/calendar/enlist-form')
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
      dataEntries.push({
        date: {
          day: dates[i].day,
          month: dates[i].month,
          dateString: dates[i].dateString,
          timestamp: dates[i].timestamp
        },
        time: entryTime.sort()
      })
    }
    return dataEntries
  }, [entries, dates])

  return (
    <>
      <Head>
        <title>Записи на процедуру</title>
      </Head>
      <NextNProgress />
      <div className={styles.navigation}>
        <nav className={styles.return} onClick={() => router.back()}>
          &#10229; Вернуться
        </nav>
        <NavPanel />
      </div>
      <section className={styles.content}>
        <h1 className={styles.header}>Выберите подходящую дату</h1>
        <p className={styles.paragraph}>доступное время: с {START_WORK} до {END_WORK}</p>
        {dataEntries.map((entry, index) =>
          <DateCard
           openForm={redirectToForm}
           entry={entry} 
           key={index}
           isClosed={checkIsClosed(closedDays, entry.date.timestamp)}
           error={error} 
           />
        )}
      </section>
      <Footer />
    </>
  )
}