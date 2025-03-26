import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiptsModule } from './receipts/receipts.module';
import { PointsModule } from './points/points.module';
@Module({
  imports: [ReceiptsModule, PointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
