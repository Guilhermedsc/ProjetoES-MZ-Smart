import { constants } from "src/utils/constants"
import { DataSource } from "typeorm"
import { Users } from "./users.entity"
import { UsersService } from "./users.service"

export const UsersProviders = [
    {
        provide: constants.UsersRepository,
        useFactory: (datasource: DataSource) => datasource.getRepository(Users),
        inject: [constants.DatabaseSource],
    },
    UsersService
]