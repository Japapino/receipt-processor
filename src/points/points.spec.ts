import { CreateReceiptDto } from '../receipts/dto/create-receipt.dto';
import { PointsService } from './points.service';
import { Item } from '../receipts/dto/item';
import { Test } from '@nestjs/testing';

describe('PointsService', () => {
  let pointsService: PointsService;
  let receipt: CreateReceiptDto;
  let testItems: Item[];

  beforeEach(async () => {
    pointsService = new PointsService();

    const moduleRef = await Test.createTestingModule({
      providers: [PointsService],
    }).compile();

    pointsService = moduleRef.get<PointsService>(PointsService);

    testItems = [
      {
        shortDescription: 'desc',
        price: '1.00',
      } as Item,
      {
        shortDescription: 'desc1',
        price: '2.00',
      } as Item,
      {
        shortDescription: 'desc2',
        price: '3.00',
      } as Item,
    ];
    receipt = {
      id: '1',
      retailer: 'someRetailer',
      purchaseDate: 'date',
      purchaseTime: 'time',
      items: testItems,
      total: '100.00',
    } as CreateReceiptDto;
  });

  describe('calculatePoints', () => {
    it('should return the correct number of points', () => {
      const result = pointsService.calculatePoints(receipt);

      expect(result).toEqual(92);
    });
  });
});
