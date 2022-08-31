import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { DELIVERY_SLOT_SERVICE } from './delivery-slot.constants';

@Controller('delivery-slot')
export class DeliverySlotController {
    constructor(@Inject(DELIVERY_SLOT_SERVICE) private readonly client: ClientProxy) { }

    @Get()
    execute(): Observable<number> {
        const pattern = { cmd: 'sum' };
        const data = [1, 2, 3, 4, 5];
        return this.client.send<number>(pattern, data);
    }

    @MessagePattern({ cmd: 'sum' })
    async accumulate(data: number[]): Promise<number> {
        return (data || []).reduce((a, b) => a + b);
    }
}
