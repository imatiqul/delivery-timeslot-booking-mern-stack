import { Test, TestingModule } from '@nestjs/testing';
import { DeliverySlotController } from './delivery-slot.controller';

describe('DeliverySlotController', () => {
  let controller: DeliverySlotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliverySlotController],
    }).compile();

    controller = module.get<DeliverySlotController>(DeliverySlotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
