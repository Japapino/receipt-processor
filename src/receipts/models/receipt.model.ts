export class Receipt {
  constructor(
    public id: string,
    public retailer: string,
    public purchaseDate: string,
    public purchasTime: string,
    public items: [],
  ) {}
}
