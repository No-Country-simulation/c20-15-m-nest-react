import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { generateCBU } from 'src/utils/generate-cbu';
import { UpdateUserDto } from './dto/update-user.dto';
import { generateAlias } from 'src/utils/generate-alias';

const selectUser = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  accounts: true,
  paymentMethods: true,
  password: false,
};

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        accounts: {
          create: {
            cbu: generateCBU(),
            alias: generateAlias(),
            balance: 0, // balance inicial
            currency: 'ARS', // moneda por defecto
          },
        },
      },
    });
  }
  update(updateUserDto: UpdateUserDto, id: string) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: selectUser,
    });
  }

  async findByEmail(email: string, password: boolean) {
    try {
      return await this.prisma.user.findFirst({
        where: { email },
        select: { ...selectUser, password },
      });
    } catch (error) {
      return null;
    }
  }

  findAll() {
    return this.prisma.user.findMany({
      select: selectUser,
    });
  }
  findOneByEmailWithPassword(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
      select: { ...selectUser, password: true },
    });
  }
}
