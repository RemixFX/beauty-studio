import { IService } from "@/types/IServices"
import { BROWS_CATEGORIES, EYELASHES_CATEGORIES, LIPS_CATEGORIES } from "./categoriesOfServices"
import { BROWS_DESCRIPTION } from "./servicesDescription"


const servicesData: IService[] = [
  {
    id: "brows",
    pathname: '/brows.jpg',
    heading: 'Перманентный макияж бровей',
    description: BROWS_DESCRIPTION,
    type: 'card',
    categories: BROWS_CATEGORIES
  },
  {
    id: "lips",
    pathname: '/lips.png',
    heading: 'Перманентный макияж губ',
    description: BROWS_DESCRIPTION,
    type: 'card',
    categories: LIPS_CATEGORIES
  },
  {
    id: "eyelashes",
    pathname: '/eyelashes.jpg',
    heading: 'Перманентный макияж век',
    description: BROWS_DESCRIPTION,
    type: 'card',
    categories: EYELASHES_CATEGORIES
  },
  {
    id: "correction",
    pathname: '/correction.jpg',
    heading: 'Коррекция татуажа',
    description: BROWS_DESCRIPTION,
    type: 'singleCard',
    price: 3000,
    time: '~ 1.5ч'
  },
  {
    id: "overlap",
    pathname: '/overlap.jpg',
    heading: 'Перекрытие татуажа',
    description: BROWS_DESCRIPTION,
    type: 'singleCard',
    price: 3000,
    time: '~ 1.5ч'
  },
]

export default servicesData