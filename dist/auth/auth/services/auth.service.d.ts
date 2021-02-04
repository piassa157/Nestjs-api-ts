import { JwtService } from "@nestjs/jwt";
import { User } from "../../user.entity";
import { UserService } from "../../user/user.service";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private validate;
    login(user: User): Promise<any | {
        status: number;
    }>;
    register(user: User): Promise<any>;
}
