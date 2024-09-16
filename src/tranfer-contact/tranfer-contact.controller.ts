import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TranferContactService } from './tranfer-contact.service';
import { CreateTranferContactDto } from './dto/create-tranfer-contact.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('tranfer-contact')
export class TranferContactController {
  constructor(private readonly tranferContactService: TranferContactService) {}

  @Post()
  @Auth(Role.USER)
  create(
    @ActiveUser() user: ActiveUserInterface,
    @Body() createTranferContactDto: CreateTranferContactDto,
  ) {
    return this.tranferContactService.create(user.id, createTranferContactDto);
  }

  @Get()
  @Auth(Role.USER)
  findAllByUser(@ActiveUser() user: ActiveUserInterface) {
    return this.tranferContactService.findAllByUser(user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranferContactService.remove(+id);
  }
}
