import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/database/database.module"
import { DevicesController } from "./devices.controller"
import { DevicesProviders } from "./devices.providers"

@Module({
    imports: [DatabaseModule],
    controllers: [DevicesController],
    providers: [...DevicesProviders]
})
export class DevicesModule {}
