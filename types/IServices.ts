export interface IService {
  id: string;
  pathname: string;
  heading: string;
  description: string;
  type: 'inCard' | 'card' | 'singleCard';
  categories?: IService[];
  price?: number;
  time?: string;
}