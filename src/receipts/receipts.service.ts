import { Injectable } from '@nestjs/common';

import { Receipt } from './models/receipt.model';

@Injectable()
export class ReceiptsService {
  Receipt: Receipt;

  create(
    retailer: string,
    purchaseDate: string,
    purchaseTime: string,
    items: [],
  ): string {
    const id: string = `${retailer}-${purchaseTime}`;

    const newReceipt = new Receipt(
      id,
      retailer,
      purchaseDate,
      purchaseTime,
      items,
    );

    return newReceipt.id;
  }

  findAll() {
    return `This action returns all receipts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }
}
