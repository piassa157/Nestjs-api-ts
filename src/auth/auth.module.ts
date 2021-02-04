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
      username: "oyyyxkdwyfbcjk",
      password:
        "526fd5dc7e275499d1e519516ed341d9456ae7d797a039670c12c0e7a5e2289c",
      database: "d3v5l2kspl2v82",
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
