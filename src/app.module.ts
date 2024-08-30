import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [UserModule, AuthModule, TransactionModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
