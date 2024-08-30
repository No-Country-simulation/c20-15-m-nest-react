import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { generateCBU } from 'src/utils/generate-cbu';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const cbu = generateCBU();
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        accounts: {
          create: {
            cbu,
            balance: 0, // balance inicial
            currency: 'ARS', // moneda por defecto
          },
        },
      },
    });
  }

  findByEmail(email: string, password: boolean) {
    return this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        accounts: true,
        paymentMethods: true,
        password,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        accounts: true,
        paymentMethods: true,
        password: false,
      },
    });
  }
  findOneByEmailWithPassword(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
      select: { name: true, email: true, password: true, role: true, id: true },
    });
  }
}
