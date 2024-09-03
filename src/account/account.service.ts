import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { generateCBU } from 'src/utils/generate-cbu';
import { generateAlias } from 'src/utils/generate-alias';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ currency }: CreateAccountDto, userId: string) {
    const cbu = generateCBU();
    const alias = generateAlias();
    return await this.prisma.account.create({
      data: { userId, currency, cbu, alias, balance: 0 },
    });
  }

  async findByCbuOrAlias(value) {
    return await this.prisma.account.findFirst({
      where: { OR: [{ alias: value }, { cbu: value }] },
    });
  }

  async findAll() {
    return await this.prisma.account.findMany({});
  }
}
