import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ReceiptFactoryService } from './receipt.factory.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService, ReceiptFactoryService],
})
export class ReceiptsModule {}
