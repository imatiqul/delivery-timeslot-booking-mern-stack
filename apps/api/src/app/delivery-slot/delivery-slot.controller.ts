import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { DELIVERY_SLOT_SERVICE } from './delivery-slot.constants';
import { DeliverySlot as DeliverySlotModel } from '@prisma/client';
import { DeliverySlotService } from '../../services/delivery-slot.service';

@Controller('delivery-slot')
export class DeliverySlotController {
    constructor(@Inject(DELIVERY_SLOT_SERVICE) private readonly client: ClientProxy,
    private readonly deliverySlotService: DeliverySlotService,
    ) { }

    @Get()
    execute(): Observable<DeliverySlotModel[]> {
        const pattern = { cmd: 'getDeliverySlots' };
        const data = 'abc';
        return this.client.send<DeliverySlotModel[]>(pattern, data);
    }
    
    @MessagePattern({ cmd: 'getDeliverySlots' })
    async getDeliverySlots(data: string): Promise<DeliverySlotModel[]> {
        const result = await this.deliverySlotService.deliverySlots({});

        console.log(result);
        if(result != undefined)
        {
            return result;
        }

        return [];
    }
}
