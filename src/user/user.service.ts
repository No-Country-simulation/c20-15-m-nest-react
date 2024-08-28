import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
      select: { password: false },
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
        account: true,
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
