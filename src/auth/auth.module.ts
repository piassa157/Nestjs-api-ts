import { Module } from "@nestjs/common";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user/user.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth/services/auth.service";
import { AuthController } from "./auth/controllers/auth.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "ec2-54-90-13-87.compute-1.amazonaws.com",
      port: 5432,
      username: "xpvasousuaoffv",
      password:
        "69e82f5026529b69dccc376c52f08974cae0c02e3d6d387d1843af5e717992d8",
      database: "da73jvqcct1f36",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    JwtModule.register({
      secretOrPrivateKey: "piassao123",
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
