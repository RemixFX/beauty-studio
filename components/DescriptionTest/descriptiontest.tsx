import Image from 'next/image'
import styles from './descriptiontest.module.scss'
import logo from '@/public/lib/logo/logo_type2.png'
import { useState } from 'react'
import servicesData from '@/config/servicesData'
import Card from '../Card/card'
import Category from '../Category/category'
import Offer from '../Offer/offer'

export default function DescriptionTest() {

  const [isOpen, setIsOpen] = useState({open: false, cat: ''})

const handleClick = (name: string) => {
  if (isOpen.open && isOpen.cat !== name) {
    setIsOpen({open: false, cat: ''})
    setIsOpen({open: true, cat: name})
  }
  if (!isOpen.open && isOpen.cat !== name) {
    setIsOpen({open: true, cat: name})
  }
  if (isOpen.open && isOpen.cat === name) {
    setIsOpen({open: false, cat: ''})
  }
}

  return (
    <section className={styles.section} id='services'>
      <h1 className={styles.title}>Студия татуажа<br />Илоны Измайловой</h1>
      <blockquote className={styles.quote}>&#34;Каждая девушка достойна...
        <span className={styles.quote__parth}> ...быть красивой&#34;</span>
      </blockquote>
      <Image src={logo} alt="студия перманентного татуажа" className={styles.logo} />
      <p className={styles.about}>что мы можем сделать для Вас:</p>
      <ul className={styles.description}>
        {servicesData.map((service, index) =>
          <li className={styles.service} key={index}>
            <p className={styles.link} onClick={() => handleClick(service.heading)}>{service.heading}</p>
            {(isOpen.open && isOpen.cat === service.heading) && <Card
              pathname={service.pathname}
              id={service.id}
              heading={service.heading}
              description={service.description}
              type={service.type}
            >
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
            </Card>
            }
          </li>
        )}
      </ul>
    </section>
  )
}