import { ICardService } from "@/types/ICardService"
import { BROWS_CATEGORIES, EYELASHES_CATEGORIES, LIPS_CATEGORIES } from "./categoriesOfServices"
import { BROWS_DESCRIPTION, CORRECTION, EYELASHES_DESCRIPTION, LIPS_DESCRIPTION, OVERLAP } from "./servicesDescription"


const servicesData: ICardService[] = [
  {
    id: 'brows',
    pathname: '/lib/categories/brows/brows.jpg',
    heading: 'Перманентный макияж бровей',
    description: BROWS_DESCRIPTION,
    name: 'brows',
    type: 'card',
    categories: BROWS_CATEGORIES
  },
  {
    id: 'lips',
    pathname: '/lib/categories/lips/lips.png',
    heading: 'Перманентный макияж губ',
    description: LIPS_DESCRIPTION,
    name: 'lips',
    type: 'card',
    categories: LIPS_CATEGORIES
  },
  {
    id: 'eyelashes',
    pathname: '/lib/categories/eyelashes/eyelashes.jpg',
    heading: 'Перманентный макияж век',
    description: EYELASHES_DESCRIPTION,
    name: 'eyelashes',
    type: 'card',
    categories: EYELASHES_CATEGORIES
  },
  {
    id: 'correction',
    pathname: '/lib/categories/correction/correction.jpg',
    heading: 'Коррекция татуажа',
    description: CORRECTION,
    name: 'correction',
    type: 'singleCard',
    price: 4000,
    time: '~ 1ч'
  },
  {
    id: 'overlap',
    pathname: '/lib/categories/overlap/overlap.jpg',
    heading: 'Перекрытие татуажа',
    description: OVERLAP,
    name: 'overlap',
    type: 'singleCard',
    price: 6000,
    time: '~ 1.5ч'
  },
]

export default servicesData