import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.transaction.findMany({});
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const { fromAccountId, toAccountId, amount, currency } =
      createTransactionDto;

    // TODO:verificar user y fromAccountId

    // Verificar que las cuentas existen
    const fromAccount = await this.prisma.account.findUnique({
      where: { id: fromAccountId },
    });

    const toAccount = await this.prisma.account.findUnique({
      where: { id: toAccountId },
    });

    if (!fromAccount || !toAccount) {
      throw new BadRequestException('Una o ambas cuentas no existen');
    }

    // Verificar que la cuenta de origen tiene fondos suficientes
    if (fromAccount.balance < amount) {
      throw new BadRequestException(
        'Fondos insuficientes en la cuenta de origen',
      );
    }

    // Realizar la transacción dentro de una transacción de base de datos
    const transaction = await this.prisma.$transaction(async (prisma) => {
      // Debitar de la cuenta de origen
      await prisma.account.update({
        where: { id: fromAccountId },
        data: { balance: { decrement: amount } },
      });

      // Acreditar a la cuenta de destino
      await prisma.account.update({
        where: { id: toAccountId },
        data: { balance: { increment: amount } },
      });

      // Crear la transacción
      return prisma.transaction.create({
        data: {
          fromAccountId,
          toAccountId,
          amount,
          currency,
          status: 'completed', // Cambiar según el estado deseado
        },
      });
    });

    return transaction;
  }
}
