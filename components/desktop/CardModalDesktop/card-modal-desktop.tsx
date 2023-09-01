import styles from './card-modal-desktop.module.scss'
import { ICardService } from '@/types/ICardService';
import Category from '@/components/Category/category';
import Offer from '@/components/Offer/offer';
import CardDesktop from '../CardDesktop/card-desktop';
import { RefObject } from 'react';

interface CardModalDesktopProps extends ICardService {
  handleCloseCard: () => void
}

export default function CardModalDesktop({
  id,
  pathname,
  heading,
  description,
  type,
  categories,
  price,
  time,
  handleCloseCard
}: CardModalDesktopProps) {

  const handleClick = () => {
    handleCloseCard()
  }

  return (
    <div className={styles.container}>
      <button className={styles.close_button} onClick={handleClick}>
        <span>&#10007;</span>
        </button>
      <CardDesktop
        id={id}
        pathname={pathname}
        heading={heading}
        description={description}
        type={type}
      >
        {price &&
          <Offer
            id={id}
            price={price}
            time={time}
          />
        }
      </CardDesktop>
      {categories &&
        categories.map((category, index) =>
          <Category key={index} heading={category.heading}>
            <CardDesktop
              id={category.id}
              pathname={category.pathname}
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
            </CardDesktop>
          </Category>
        )
      }
    </div >
  )
}