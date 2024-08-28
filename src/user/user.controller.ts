import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';

export class FindByUserDto {
  @IsEmail()
  email: string;
}

@ApiTags('user')
@Auth(Role.ADMIN)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
