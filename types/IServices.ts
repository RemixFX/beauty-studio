export enum ServicesEnum {
  brows = 'brows',
  lips = 'lips',
  eyelashes = 'eyelashes',
  correction = 'correction',
  overlap = 'overlap',
}

export interface ICategoriesOfServices {
  heading: string;
  name: string;
}

export interface IServices extends ICategoriesOfServices {
  categories?: ICategoriesOfServices[];
}

