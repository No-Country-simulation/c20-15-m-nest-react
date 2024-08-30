import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from 'src/prisma.service';
import { AccountService } from 'src/account/account.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, PrismaService, AccountService],
})
export class TransactionModule {}
