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


 const getStaticProps: GetStaticProps<{ data: any }> = async () => {
    const data = await client.query({query: getEntries})
  return { props: { data } }
}

export default function Calendar({data}: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter()
  const {getNextDatesInterval} = useDate()

  const redirectToForm = () => {
    router.push({
      pathname: '/enlist/calendar/enlist-form',
      query: router.query
    })
  }
  console.log(data)
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