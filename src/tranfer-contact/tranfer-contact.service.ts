import { Injectable } from '@nestjs/common';
import { CreateTranferContactDto } from './dto/create-tranfer-contact.dto';
import { UpdateTranferContactDto } from './dto/update-tranfer-contact.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TranferContactService {
  constructor(private readonly prisma: PrismaService) {}
  async create(userId: string, { accountId }: CreateTranferContactDto) {
    return await this.prisma.transferContact.create({
      data: {
        accountId,
        userId,
      },
    });
  }

  async findAllByUser(userId: string) {
    return await this.prisma.transferContact.findMany({
      where: { userId },
      include: { account: true }, // Puedes incluir detalles de la cuenta
    });
  }

  remove(id: number) {
    return `This action removes a #${id} tranferContact`;
  }
}
