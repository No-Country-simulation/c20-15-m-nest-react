import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}
  async findAccountIdByCbu(cbu: string) {
    const user = await this.prisma.account.findFirst({ where: { cbu } });
    return user.id;
  }
}
