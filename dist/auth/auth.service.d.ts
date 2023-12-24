import { UserService } from '../user/user.service';
import { LoginDto } from '../auth/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    private logger;
    constructor(userService: UserService, jwtService: JwtService);
    login(loginCredentialsDto: LoginDto): Promise<any>;
    validateUser(email: string): Promise<any>;
    getUser(): Promise<any>;
}
