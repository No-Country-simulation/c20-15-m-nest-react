import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Transactions')
@ApiBearerAuth()
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @ApiOperation({
    summary: 'Crear transacciones(USER)',
    description: 'Este endpoint permite realizar una transaccion',
  })
  @ApiParam({
    name: 'fromAccountId',
    description: 'Id de la cuenta',
    required: true,
  })
  @ApiParam({
    name: 'toAccountId',
    description: 'Id de la cuenta reseptora',
    required: true,
  })
  @ApiParam({
    name: 'amount',
    description: 'Cantiad a transferir',
    required: true,
  })
  @ApiParam({
    name: 'currency',
    description: 'tipo de moneda ARS o USD',
    required: true,
  })
  @Post()
  @Auth(Role.USER)
  async createTransaction(
    // @ActiveUser() user: ActiveUserInterface,
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
