import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ReceiptFactoryService } from './receipt.factory.service';
import { PointsService } from '../points/points.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService, ReceiptFactoryService, PointsService],
  imports: [],
})
export class ReceiptsModule {}
