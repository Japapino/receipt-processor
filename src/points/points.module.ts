import { Module } from '@nestjs/common';
import { PointsService } from './points.service';

@Module({
  imports: [],
  exports: [PointsService],
})
export class PointsModule {}
