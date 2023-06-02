import { ICategoriesOfServices, IServices } from "@/types/IServices";

const browsCategories: ICategoriesOfServices[] = [
  {
    name: 'brows_powder',
    heading: 'Пудровое напыление',
  },
  {
    name: 'brows_shading',
    heading: 'Растушевка',
  },
]

const lipsCategories: ICategoriesOfServices[] = [
  {
    name: 'lips-watercolor',
    heading: 'Акварельный прокрас',
  },
  {
    name: 'lips-lipstick',
    heading: 'Помадный эффект',
  },
  {
    name: 'lips-threed',
    heading: '3D',
  },
  {
    name: 'lips-nude',
    heading: 'Натуральный',
  },
]

const eyelashesCategories: ICategoriesOfServices[] = [
  {
    name: 'eyelashes-arrow-shading',
    heading: 'Стрелка с растушёвкой',
  },
  {
    name: 'eyelashes-arrow-classic',
    heading: 'Стрелка классическая',
  },
  {
    name: 'eyelashes-arrow-soft',
    heading: 'Стрелка мягкая(карандашная)',
  },
  {
    name: 'eyelashes-interciliary',
    heading: 'Межресничный татуаж',
  },
  {
    name: 'eyelashes-lower_eyelid',
    heading: 'Нижнее веко',
  },
  {
    name: 'eyelashes-color',
    heading: 'Цветной',
  },
]

export const servicesData: IServices[] = [
  {
    name: 'brows',
    heading: 'Перманентный макияж бровей',
    categories: browsCategories
  },
  {
    name: 'lips',
    heading: 'Перманентный макияж губ',
    categories: lipsCategories
  },
  {
    name: 'eyelashes',
    heading: 'Перманентный макияж век',
    categories: eyelashesCategories
  },
  {
    name: 'correction',
    heading: 'Коррекция татуажа',
  },
  {
    name: 'overlap',
    heading: 'Перекрытие татуажа',
  },
]