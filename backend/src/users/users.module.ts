import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/database/database.module"
import { UsersController } from "./users.controller"
import { UsersProviders } from "./users.providers"

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [...UsersProviders]
})
export class UsersModule {}
