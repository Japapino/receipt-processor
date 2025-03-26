import { Item } from '../dto/item';

export class Receipt {
  id: string;
  retailer: string;
  purchaseDate: string;
  purchaseTime: string;
  items: Item[];
  total: string;
  pointsEarned: number;
}
