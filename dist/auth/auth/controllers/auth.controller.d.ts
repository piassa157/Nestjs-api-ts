import { User } from "src/auth/user.entity";
import { AuthService } from "../services/auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User): Promise<any>;
    register(user: User): Promise<any>;
}
