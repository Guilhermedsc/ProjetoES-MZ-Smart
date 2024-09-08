import { constants } from "src/utils/constants"
import { DataSource } from "typeorm"
import { Devices } from "./devices.entity"
import { DevicesService } from "./devices.service"

export const DevicesProviders = [
    {
        provide: constants.DevicesRepository,
        useFactory: (datasource: DataSource) => datasource.getRepository(Devices),
        inject: [constants.DatabaseSource],
    },
    DevicesService
]