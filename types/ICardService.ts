import { ICategoriesOfServices } from "./IServices";

 interface ICardCategories extends ICategoriesOfServices {
  id: string;
  pathname: string;
  description: string;
  type: 'inCard' | 'card' | 'singleCard';
  price?: number;
  time?: string;
 }

export interface ICardService extends Omit<ICardCategories, 'name'> {
  categories?: ICardCategories[];
}