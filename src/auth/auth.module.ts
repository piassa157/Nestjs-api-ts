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
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "db_api",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
    }),
    JwtModule.register({
      secretOrPrivateKey: "piassao123",
    }),
  ],
  providers: [UserService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
