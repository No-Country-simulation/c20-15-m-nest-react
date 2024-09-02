import { IsString, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  currency: string;
}
