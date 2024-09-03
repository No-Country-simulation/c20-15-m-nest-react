import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { generateAlias } from 'src/utils/generate-alias';

@ApiTags('Accounts')
@ApiBearerAuth()
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({ summary: 'Crear cuenta (USER)' })
  @Post('')
  @Auth(Role.USER)
  create(
    @ActiveUser() activeUser: ActiveUserInterface,
    @Body() createAccountDto: CreateAccountDto,
  ) {
    this.accountService.create(createAccountDto, activeUser.id);
  }

  @ApiOperation({ summary: 'listar todas las cuentas (ADMIN)' })
  @Get('all')
  @Auth(Role.ADMIN)
  findAll() {
    return generateAlias();
  }

  @ApiOperation({
    summary: 'Buscar por alias o CBU (USER)',
    description:
      'Este endpoint permite buscar una cuenta utilizando un alias o un CBU.',
  })
  @ApiParam({
    name: 'value',
    description: 'El alias o CBU para buscar la cuenta',
    required: true,
  })
  @Get(':value')
  @Auth(Role.USER)
  findByAliasOrAlias(@Param('value') value: string) {
    return this.accountService.findByCbuOrAlias(value);
  }
}
