import { ICardService } from "@/types/ICardService"
import { BROWS_DESCRIPTION, BROWS_POWDER, BROWS_SHADING, CORRECTION, EYELASHES_ARROW_CLASSIC, EYELASHES_ARROW_SHADING, EYELASHES_ARROW_SOFT, EYELASHES_COLOR, EYELASHES_DESCRIPTION, EYELASHES_INTERCILIARY, EYELASHES_LOWER_EYELID, LIPS_DESCRIPTION, LIPS_LIPSTICK, LIPS_NUDE, LIPS_THREED, LIPS_WATERCOLOR, OVERLAP } from "./servicesDescription"


const cardDataServices: ICardService[] = [
  {
    id: 'brows',
    pathname: '/lib/categories/brows/brows.jpg',
    heading: 'Перманентный макияж бровей',
    description: BROWS_DESCRIPTION,
    type: 'card',
    categories: [
      {
        id: "brows",
        pathname: '/lib/categories/brows/brows_powder.jpeg',
        heading: 'Пудровое напыление',
        description: BROWS_POWDER,
        name: 'brows_powder',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
        
      },
      {
        id: "brows",
        pathname: '/lib/categories/brows/brows_shading.jpeg',
        heading: 'Растушевка',
        description: BROWS_SHADING,
        name: 'brows_shading',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },

    ]
  },
  {
    id: 'lips',
    pathname: '/lib/categories/lips/lips.png',
    heading: 'Перманентный макияж губ',
    description: LIPS_DESCRIPTION,
    type: 'card',
    categories: [
      {
        id: "lips",
        pathname: '/lib/categories/lips/lips_watercolor.jpeg',
        heading: 'Акварельный прокрас',
        description: LIPS_WATERCOLOR,
        name: 'lips-watercolor',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
      {
        id: "lips",
        pathname: '/lib/categories/lips/lips_lipstick.jpeg',
        heading: 'Помадный эффект',
        description: LIPS_LIPSTICK,
        name: 'lips-lipstick',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
      {
        id: "lips",
        pathname: '/lib/categories/lips/lips_threed.jpeg',
        heading: '3D',
        description: LIPS_THREED,
        name: 'lips-threed',
        type: 'inCard',
        price: 7000,
        time: '~2ч'
      },
      {
        id: "lips",
        pathname: '/lib/categories/lips/lips_nude.jpeg',
        heading: 'Натуральный',
        description: LIPS_NUDE,
        name: 'lips-nude',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
    ]
  },
  {
    id: 'eyelashes',
    pathname: '/lib/categories/eyelashes/eyelashes.jpg',
    heading: 'Перманентный макияж век',
    description: EYELASHES_DESCRIPTION,
    type: 'card',
    categories: [
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_shading.jpeg',
        heading: 'Стрелка с растушёвкой',
        name: 'eyelashes-arrow-shading',
        description: EYELASHES_ARROW_SHADING,
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_classic.jpeg',
        heading: 'Стрелка классическая',
        description: EYELASHES_ARROW_CLASSIC,
        name: 'eyelashes-arrow-classic',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_soft.jpeg',
        heading: 'Стрелка мягкая(карандашная)',
        description: EYELASHES_ARROW_SOFT,
        name: 'eyelashes-arrow-soft',
        type: 'inCard',
        price: 6000,
        time: '~1.5ч'
      },
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_interciliary.jpeg',
        heading: 'Межресничный татуаж',
        description: EYELASHES_INTERCILIARY,
        name: 'eyelashes-interciliary',
        type: 'inCard',
        price: 4500,
        time: '~1.5ч'
      },
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_lower.jpeg',
        heading: 'Нижнее веко',
        description: EYELASHES_LOWER_EYELID,
        name: 'eyelashes-lower_eyelid',
        type: 'inCard',
        price: 2000,
        time: '~1ч'
      },
      {
        id: "eyelashes",
        pathname: '/lib/categories/eyelashes/eyelashes_color.jpeg',
        heading: 'Цветной',
        description: EYELASHES_COLOR,
        name: 'eyelashes-color',
        type: 'inCard',
        price: 6000,
        time: '~2ч'
      },
    ]
  },
  {
    id: 'correction',
    pathname: '/lib/categories/correction/correction.jpg',
    heading: 'Коррекция перманентного макияжа',
    description: CORRECTION,
    type: 'singleCard',
    price: 4000,
    time: '~1ч'
  },
  {
    id: 'overlap',
    pathname: '/lib/categories/overlap/overlap.jpg',
    heading: 'Перекрытие татуажа',
    description: OVERLAP,
    type: 'singleCard',
    price: 6000,
    time: '~1.5ч'
  },
]

export default cardDataServices