import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';

export class FindByUserDto {
  @IsEmail()
  email: string;
}

@ApiTags('user')
@Auth(Role.ADMIN)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  @Auth(Role.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @Get('')
  @Auth(Role.USER)
  user(@ActiveUser() user: ActiveUserInterface) {
    return this.userService.findByEmail(user.email, false);
  }
}
