import Head from 'next/head'
import client from "@/apollo-client";
import DateCard from '@/components/DateCard/date-card'
import Footer from '@/components/Footer/footer'
import NavPanel from '@/components/NavPanel/nav-panel'
import useDate from '@/hooks/useDate'
import styles from '@/styles/calendar.module.scss'
import { useRouter } from 'next/router'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getEntries } from '@/api/entries';
import { ApolloQueryResult } from '@apollo/client';

interface Entry {
    id: number
    name: string
    phone: string
    service: string
    category: string | null
    date: string
    time: string
}

interface Entries {
  getEntries: Entry[]
}

 export const getStaticProps: GetStaticProps<{ entries: Entry[], error: boolean }> = async () => {
  try {
    const data : ApolloQueryResult<Entries> = await client.query({query: getEntries})
    return { props: { entries: data.data.getEntries, error: false } }
}
  catch (error) {
    return { props: { entries: [], error: true } }
  }
  
}

export default function Calendar({entries, error}: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter()
  const {getNextDatesInterval} = useDate()

  const redirectToForm = () => {
    router.push({
      pathname: '/enlist/calendar/enlist-form',
      query: router.query
    })
  }
  console.log(entries, error)
  const dates = getNextDatesInterval(30, 18)

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
        {dates.map((date, index) =>
          <DateCard handleClick={redirectToForm} date={date} key={index}/>
        )}
      </section>
      <Footer/>
    </>
  )
}