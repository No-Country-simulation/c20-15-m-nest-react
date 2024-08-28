import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register({ password, email, name }: RegisterDto): Promise<{
        message: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
}
