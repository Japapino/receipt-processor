import { Item } from 'src/receipts/dto/item';
export class CreateReceiptDto {
  constructor(
    public id: string,
    public retailer: string,
    public purchaseDate: string,
    public purchaseTime: string,
    public items: Item[],
    public total: string,
  ) {}
}
