import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptFactoryService {
  createNewReceipt(createReceiptDto: CreateReceiptDto) {
    const newReceipt = new Receipt();
    newReceipt.retailer = createReceiptDto.retailer;
    newReceipt.purchaseDate = createReceiptDto.purchaseDate;
    newReceipt.purchaseTime = createReceiptDto.purchaseTime;
    newReceipt.items = createReceiptDto.items;
    newReceipt.total = createReceiptDto.total;

    return newReceipt;
  }
}
