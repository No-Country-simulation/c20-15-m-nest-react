import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Transactions')
@ApiBearerAuth()
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({ summary: 'Crear transacciones(USER)' })
  @Post()
  @Auth(Role.USER)
  async createTransaction(
    @ActiveUser() user: ActiveUserInterface,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @ApiOperation({ summary: 'Listar transacciones(ADMIN)' })
  @Get('all')
  @Auth(Role.ADMIN)
  async findAll() {
    return this.transactionService.findAll();
  }
}
