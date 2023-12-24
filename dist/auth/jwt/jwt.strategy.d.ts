import { Strategy } from 'passport-jwt';
import { IJwtPayload } from './jwt-payload.interface';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: IJwtPayload): Promise<any>;
}
export {};
