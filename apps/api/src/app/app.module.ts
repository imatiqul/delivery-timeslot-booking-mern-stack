import { Module } from '@nestjs/common';
import { DeliverySlotService } from '../services/delivery-slot.service';
import { PrismaService } from '../services/prisma.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverySlotModule } from './delivery-slot/delivery-slot.module';

@Module({
  imports: [DeliverySlotModule],
  controllers: [AppController],
  providers: [PrismaService, DeliverySlotService, AppService],
})
export class AppModule {}
