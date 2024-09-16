import { IsString } from 'class-validator';

export class CreateTranferContactDto {
  @IsString()
  accountId: string;
}
