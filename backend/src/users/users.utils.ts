import { NotFoundException } from "@nestjs/common"
import { ObjectId } from "mongodb"
import { Repository } from "typeorm"
import { Users } from "./users.entity"

export async function checkUser(id: string, repository: Repository<Users>) {
    if (!ObjectId.isValid(id)) {
        throw new NotFoundException("User not found")
    }

    const _id = new ObjectId(id)
    if (!await repository.findOne({ where: { _id } })) {
        throw new NotFoundException("User not found")
    }

    return _id
}
