import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common"
import { Users } from "./users.entity"
import { Repository } from "typeorm"
import { constants } from "src/utils/constants"
import { CreateUserDTO } from "./dtos/create.users.dto"
import { checkDevice } from "src/devices/devices.utils"
import { checkUser } from "./users.utils"
import { UpdateUserDTO } from "./dtos/update.users.dto"
import { ObjectId } from "mongodb"

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

    async deleteUser(id: string) {
        const _id = checkUser(id, this.repository)
        return await this.repository.delete(_id)
    }
    
    async updateUser(id: string, updateUserDTO: UpdateUserDTO) {
        const objectId = new ObjectId(id); // Converte a string `id` para `ObjectId`
        const user = await this.repository.findOne({ where: { _id: objectId } });
    
        if (!user) {
            throw new NotFoundException('User not found');
        }
    
        // Atualiza apenas os campos fornecidos
        if (updateUserDTO.name) {
            user.name = updateUserDTO.name;
        }
        if (updateUserDTO.phone_number) {
            user.phone_number = updateUserDTO.phone_number;
        }
    
        await this.repository.save(user);
        return user;
    }
    
}