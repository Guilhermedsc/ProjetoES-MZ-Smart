import { Body, Controller, Get, Delete, Post, Param, Put } from "@nestjs/common"
import { constants } from "src/utils/constants"
import { UsersService } from "./users.service"
import { CreateUserDTO } from "./dtos/create.users.dto"
import { UpdateUserDTO } from "./dtos/update.users.dto"

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

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.service.deleteUser(id)
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string, // Recebe o ID do usuário pela URL
        @Body() updateUserDTO: UpdateUserDTO, // Valida os dados de entrada com o DTO
    ) {
        return await this.service.updateUser(id, updateUserDTO);
    }
}
