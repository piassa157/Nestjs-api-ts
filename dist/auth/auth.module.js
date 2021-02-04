"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./user/user.service");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth/services/auth.service");
const auth_controller_1 = require("./auth/controllers/auth.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forRootAsync({
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
            jwt_1.JwtModule.register({
                secretOrPrivateKey: "piassao123",
            }),
        ],
        providers: [user_service_1.UserService, auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map