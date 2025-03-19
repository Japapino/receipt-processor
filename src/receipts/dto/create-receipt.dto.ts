export class CreateReceiptDto {
  id: string;
  retailer: string;
  purchaseDate: string;
  purchaseTime: string;
  items: [];
  total: string;
}
