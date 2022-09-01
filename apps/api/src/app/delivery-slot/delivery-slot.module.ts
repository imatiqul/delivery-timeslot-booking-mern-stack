import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DeliverySlotService } from '../../services/delivery-slot.service';
import { PrismaService } from '../../services/prisma.service';
import { DELIVERY_SLOT_SERVICE } from './delivery-slot.constants';
import { DeliverySlotController } from './delivery-slot.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: DELIVERY_SLOT_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [DeliverySlotController],
  providers: [DeliverySlotService, PrismaService]
})
export class DeliverySlotModule { }
