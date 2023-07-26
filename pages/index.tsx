import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/header'
import Description from '@/components/Description/description'
import Card from '@/components/Card/card'
import Footer from '@/components/Footer/footer'
import Category from '@/components/Category/category'
import Offer from '@/components/Offer/offer'
import Layout from '@/components/Layout/layout'
import cardDataServices from '@/config/cardDataServices'
import { useEffect, useRef, useState } from 'react'
import CardModalDesktop from '@/components/desktop/CardModalDesktop/card-modal-desktop'
import { ICardService } from '@/types/ICardService'

export default function Home() {

  const [cardData, setCardData] = useState<ICardService | null>(null)
  const ref = useRef<HTMLDivElement>(null);

  const sendCardData = (data: ICardService) => {
    setCardData(data)
  }

  const closeCard = () => {
    setCardData(null)
  }

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [cardData])

  return (
    <>
      <Head>
        <title>Студия татуажа Илоны Измайловой</title>
        <meta name="description" content="татуаж Краснодар" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Description />
      </Layout>
      {cardData ?
        <div ref={ref}>
          <CardModalDesktop
            pathname={cardData.pathname}
            id={cardData.id}
            heading={cardData.heading}
            description={cardData.description}
            type={cardData.type}
            categories={cardData.categories}
            handleCloseCard={closeCard}
            price={cardData.price}
            time={cardData.time}
          />
        </div>
        :
        <section className={styles.main}>
          {cardDataServices.map((service, index) =>
            <Card
              key={index}
              pathname={service.pathname}
              id={service.id}
              heading={service.heading}
              description={service.description}
              type={service.type}
              categories={service.categories}
              sendCardData={sendCardData}
              price={service.price}
              time={service.time}
            >
              <div className={styles.mobile_layout}>
                {service.categories ?
                  service.categories.map((category, index) =>
                    <Category key={index} heading={category.heading}>
                      <Card
                        pathname={category.pathname}
                        id={category.id}
                        heading={category.heading}
                        description={category.description}
                        type={category.type}
                      >
                        <Offer
                          id={category.id}
                          name={category.name}
                          price={category.price}
                          time={category.time}
                        />
                      </Card>
                    </Category>
                  )
                  :
                  <Offer
                    id={service.id}
                    price={service.price}
                    time={service.time}
                  />
                }
              </div>
            </Card>
          )}
        </section>
      }
      <Footer />
    </>
  )
}
