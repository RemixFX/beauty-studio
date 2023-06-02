export interface ICardService {
  id: string;
  pathname: string;
  heading: string;
  description: string;
  name: string;
  type: 'inCard' | 'card' | 'singleCard';
  categories?: ICardService[];
  price?: number;
  time?: string;
}