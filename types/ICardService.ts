import { ICategoriesOfServices } from "./IServices";

 interface ICardCategories extends Omit<ICategoriesOfServices, 'name'> {
  id: string;
  pathname: string;
  description: string;
  type: 'inCard' | 'card' | 'singleCard';
  price?: number;
  time?: string;
 }

export interface ICardService extends ICardCategories {
  categories?: ICardCategories[];
}
