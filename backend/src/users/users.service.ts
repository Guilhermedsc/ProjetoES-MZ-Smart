import { ConflictException, Inject, Injectable } from "@nestjs/common"
import { Users } from "./users.entity"
import { Repository } from "typeorm"
import { constants } from "src/utils/constants"
import { CreateUserDTO } from "./dtos/create.users.dto"

@Injectable()
export class UsersService {
    constructor (
        @Inject(constants.UsersRepository)
        private readonly repository: Repository<Users>
    ) {}

    async create(user: CreateUserDTO) {
        if (await this.repository.findOne({ where: { cpf: user.cpf } })) {
            throw new ConflictException("CPF already exists")
        }

        const newUser = await this.repository.save(user)
        return { _id: newUser._id }
    }

    async getAll() {
        return await this.repository.find()
    }
}