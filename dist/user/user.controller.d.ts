import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { User } from './schema/user.schema';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    registerUser(registerDto: RegisterDto): Promise<any>;
    getUserProfile(user: User): User;
}
