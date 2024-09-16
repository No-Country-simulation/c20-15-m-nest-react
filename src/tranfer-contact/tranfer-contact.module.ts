import { Module } from '@nestjs/common';
import { TranferContactService } from './tranfer-contact.service';
import { TranferContactController } from './tranfer-contact.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TranferContactController],
  providers: [TranferContactService, PrismaService],
})
export class TranferContactModule {}
