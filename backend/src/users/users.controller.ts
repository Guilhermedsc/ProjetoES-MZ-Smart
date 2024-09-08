import { Body, Controller, Get, Post } from "@nestjs/common"
import { constants } from "src/utils/constants"
import { UsersService } from "./users.service"
import { CreateUserDTO } from "./dtos/create.users.dto"

@Controller(constants.UsersController)
export class UsersController {
    constructor (
        private readonly service: UsersService
    ) {}

    @Post()
    async createUser(@Body() data: CreateUserDTO) {
        return await this.service.create(data)
    }

    @Get()
    async getUsers() {
        return await this.service.getAll()
    }
}