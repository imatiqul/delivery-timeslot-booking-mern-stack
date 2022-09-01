import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DeliverySlot, Prisma } from '@prisma/client';

@Injectable()
export class DeliverySlotService {
  constructor(private prisma: PrismaService) {}

  async deliverySlot(
    DeliverySlotWhereUniqueInput: Prisma.DeliverySlotWhereUniqueInput,
  ): Promise<DeliverySlot | null> {
    return this.prisma.deliverySlot.findUnique({
      where: DeliverySlotWhereUniqueInput,
    });
  }

  async deliverySlots(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeliverySlotWhereUniqueInput;
    where?: Prisma.DeliverySlotWhereInput;
    orderBy?: Prisma.DeliverySlotOrderByWithRelationInput;
  }): Promise<DeliverySlot[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.deliverySlot.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDeliverySlot(data: Prisma.DeliverySlotCreateInput): Promise<DeliverySlot> {
    return this.prisma.deliverySlot.create({
      data,
    });
  }

  async updateDeliverySlot(params: {
    where: Prisma.DeliverySlotWhereUniqueInput;
    data: Prisma.DeliverySlotUpdateInput;
  }): Promise<DeliverySlot> {
    const { where, data } = params;
    return this.prisma.deliverySlot.update({
      data,
      where,
    });
  }

  async deleteDeliverySlot(where: Prisma.DeliverySlotWhereUniqueInput): Promise<DeliverySlot> {
    return this.prisma.deliverySlot.delete({
      where,
    });
  }
}