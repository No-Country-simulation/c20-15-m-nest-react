import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  fromAccountId;

  @IsString()
  toAccountId: string;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
}
