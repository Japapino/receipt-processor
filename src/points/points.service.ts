/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from 'src/receipts/dto/create-receipt.dto';
import { Item } from 'src/receipts/dto/item';

@Injectable()
export class PointsService {
  calculatePoints(receipt: CreateReceiptDto): number {
    let pointsTotal: number = 0;

    // 1 pt for each char (excluding special chars)
    const points_retailerName = receipt.retailer.replace(
      /[^\w\s]/gi,
      '',
    ).length;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ptsPerItemDesc = (items: Item[]): number => {
      return items.reduce((acc, val) => {
        const desc: number = val.shortDescription.length;
        return acc + Math.floor(desc / 3);
      }, 0);
      // assuming above logic is correct and is true
      // then multiply price by 0.2 and round up
    };

    // 50 points for flat dollar amount
    // examles do not have $, but may want to add a check
    const total = parseInt(receipt.total, 10);
    const points_cashTotal = total % 1 == 0 ? 50 : 0;

    // 25 points if the total is a multiple of 0.25
    const points_multipleOf025 = total % 0.25 == 0 ? 25 : 0;

    // 5 for every two items
    const points_per2items = Math.floor(receipt.items.length / 2) * 5;

    // 0.2 * price-of-item and round up, if length of item description is mutiple of 3
    // const points_perItemDesc = ptsPerItemDesc(receipt.items);

    // 6 points if purchase date is odd

    // 10 points if the time of purchase is betwen 2pm ands 4pm

    console.log(points_retailerName);
    console.log(points_cashTotal);
    console.log(points_multipleOf025);
    console.log(points_per2items);

    pointsTotal =
      points_retailerName +
      points_cashTotal +
      points_multipleOf025 +
      points_per2items;
    // points_perItemDesc;

    return pointsTotal;
  }
}
