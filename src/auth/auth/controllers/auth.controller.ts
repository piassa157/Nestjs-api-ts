import { Body, Controller, Post } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() user: User): Promise<any> {
    return this.authService.login(user);
  }

  @Post("register")
  async register(@Body() user: User): Promise<any> {
    return this.authService.register(user);
  }
}
