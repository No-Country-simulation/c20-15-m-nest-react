import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { UpdateUserDto } from './dto/update-user.dto';

export class FindByUserDto {
  @IsEmail()
  email: string;
}

@ApiTags('Users')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Listar usuarios (ADMIN)' })
  @Get('all')
  @Auth(Role.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Ver usuario (USER)' })
  @Get('')
  @Auth(Role.USER)
  user(@ActiveUser() user: ActiveUserInterface) {
    return this.userService.findByEmail(user.email, false);
  }

  @ApiOperation({ summary: 'Actualizar usuario (ADMIN)' })
  @Post(':id')
  @Auth(Role.ADMIN)
  update(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseUUIDPipe) id) {
    return this.userService.update(updateUserDto, id);
  }
}
