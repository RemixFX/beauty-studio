import { IService } from "@/types/IServices";
import { BROWS_POWDER, BROWS_SHADING, EYELASHES_ARROW_CLASSIC, EYELASHES_ARROW_SHADING, EYELASHES_ARROW_SOFT, EYELASHES_COLOR, EYELASHES_INTERCILIARY, EYELASHES_LOWER_EYELID, LIPS_LIPSTICK, LIPS_NUDE, LIPS_THREED, LIPS_WATERCOLOR } from "./servicesDescription";

export const BROWS_CATEGORIES: IService[] = [
  {
    id: "brows",
    pathname: '/lib/categories/brows/brows_powder.jpeg',
    heading: 'Пудровое напыление',
    description: BROWS_POWDER,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
  {
    id: "brows",
    pathname: '/lib/categories/brows/brows_shading.jpeg',
    heading: 'Растушевка',
    description: BROWS_SHADING,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
]

export const LIPS_CATEGORIES: IService[] = [
  {
    id: "lips",
    pathname: '/lib/categories/lips/lips_watercolor.jpeg',
    heading: 'Акварельный прокрас',
    description: LIPS_WATERCOLOR,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
  {
    id: "lips",
    pathname: '/lib/categories/lips/lips_lipstick.jpeg',
    heading: 'Помадный эффект',
    description: LIPS_LIPSTICK,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
  {
    id: "lips",
    pathname: '/lib/categories/lips/lips_threed.jpeg',
    heading: '3D',
    description: LIPS_THREED,
    type: 'inCard',
    price: 7000,
    time: '~2ч'
  },
  {
    id: "lips",
    pathname: '/lib/categories/lips/lips_nude.jpeg',
    heading: 'Натуральный',
    description: LIPS_NUDE,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
]

export const EYELASHES_CATEGORIES: IService[] = [
  {
    id: "eyelashes",
    pathname: '/lib/categories/eyelashes/eyelashes_shading.jpeg',
    heading: 'Стрелка с растушёвкой',
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
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
  {
    id: "eyelashes",
    pathname: '/lib/categories/eyelashes/eyelashes_soft.jpeg',
    heading: 'Стрелка мягкая(карандашная)',
    description: EYELASHES_ARROW_SOFT,
    type: 'inCard',
    price: 6000,
    time: '~1.5ч'
  },
  {
    id: "eyelashes",
    pathname: '/lib/categories/eyelashes/eyelashes_interciliary.jpeg',
    heading: 'Межресничный татуаж',
    description: EYELASHES_INTERCILIARY,
    type: 'inCard',
    price: 4500,
    time: '~1.5ч'
  },
  {
    id: "eyelashes",
    pathname: '/lib/categories/eyelashes/eyelashes_lower.jpeg',
    heading: 'Нижнее веко',
    description: EYELASHES_LOWER_EYELID,
    type: 'inCard',
    price: 2000,
    time: '~1ч'
  },
  {
    id: "eyelashes",
    pathname: '/lib/categories/eyelashes/eyelashes_color.jpeg',
    heading: 'Цветной',
    description: EYELASHES_COLOR,
    type: 'inCard',
    price: 6000,
    time: '~2ч'
  },
]
