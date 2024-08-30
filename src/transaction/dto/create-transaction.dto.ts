import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  fromAccountId;

  @IsString()
  toAccountCBU: string;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
}
