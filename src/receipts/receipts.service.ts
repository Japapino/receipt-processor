import { Injectable } from '@nestjs/common';
import { Receipt } from './entities/receipt.entity';
import { ReceiptFactoryService } from './receipt.factory.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { PointsService } from '../points/points.service';

@Injectable()
export class ReceiptsService {
  // constructor to save data goes here
  constructor(
    private receiptFactory: ReceiptFactoryService,
    private pointsService: PointsService,
  ) {}

  create(receiptDto: CreateReceiptDto): string {
    // create model
    const newReceipt: Receipt =
      this.receiptFactory.createNewReceipt(receiptDto);

    newReceipt.pointsEarned = this.pointsService.calculatePoints(newReceipt);
    // calculate point total
    // let pointsEarned: number = calculatePoints(newReceipt);
    // create entity and save receipt

    return newReceipt.retailer;
  }

  findAll() {
    return `This action returns all receipts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }
}
