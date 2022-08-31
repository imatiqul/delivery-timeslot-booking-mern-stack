import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DELIVERY_SLOT_SERVICE } from './delivery-slot.constants';
import { DeliverySlotController } from './delivery-slot.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: DELIVERY_SLOT_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [DeliverySlotController]
})
export class DeliverySlotModule {}
