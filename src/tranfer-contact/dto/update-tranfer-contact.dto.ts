import { PartialType } from '@nestjs/swagger';
import { CreateTranferContactDto } from './create-tranfer-contact.dto';

export class UpdateTranferContactDto extends PartialType(CreateTranferContactDto) {}
