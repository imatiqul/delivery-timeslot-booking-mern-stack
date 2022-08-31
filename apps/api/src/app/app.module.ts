import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverySlotModule } from './delivery-slot/delivery-slot.module';

@Module({
  imports: [DeliverySlotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
