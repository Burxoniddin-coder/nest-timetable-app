import { AuthService } from '../auth/auth.service';
import { LoginDto } from '../auth/dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<any>;
    getUser(loginDto: LoginDto): Promise<any>;
}
