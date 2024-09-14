import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/database/database.module"
import { UsersController } from "./users.controller"
import { UsersProviders } from "./users.providers"
import { DevicesModule } from "src/devices/devices.module"
import { DevicesProviders } from "src/devices/devices.providers"

@Module({
    imports: [DatabaseModule, DevicesModule],
    controllers: [UsersController],
    providers: [...UsersProviders, ...DevicesProviders],
})
export class UsersModule {}
