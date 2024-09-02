import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { generateAlias } from 'src/utils/generate-alias';

@ApiTags('Accounts')
@ApiBearerAuth()
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('')
  @Auth(Role.USER)
  create(
    @ActiveUser() activeUser: ActiveUserInterface,
    @Body() createAccountDto: CreateAccountDto,
  ) {
    this.accountService.create(createAccountDto, activeUser.id);
  }

  @Get('')
  generate() {
    return generateAlias();
  }
}
