import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';

@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Post('process')
  process(
    @Body('retailer') retailer: string,
    @Body('purchaseDate') purchaseDate: string,
    @Body('purchaseTime') purchaseTime: string,
    @Body('items') items: [],
  ) {
    const generatedId = this.receiptsService.create(
      retailer,
      purchaseDate,
      purchaseTime,
      items,
    );

    return { id: generatedId };
  }

  @Get()
  findAll() {
    return this.receiptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptsService.findOne(+id);
  }
}
