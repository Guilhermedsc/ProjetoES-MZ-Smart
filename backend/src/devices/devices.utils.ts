import { NotFoundException } from "@nestjs/common"
import { ObjectId } from "mongodb"
import { GetDevicesDTO } from "./dots/get.devices.dto"
import { Devices } from "./devices.entity"
import { Repository } from "typeorm"

export async function checkDevice(id: string, repository: Repository<Devices>) {
    if (!ObjectId.isValid(id)) {
        throw new NotFoundException("Device not found")
    }

    const _id = new ObjectId(id)
    if (!await repository.findOne({ where: { _id } })) {
        throw new NotFoundException("Device not found")
    }

    return _id
}

export function constructQuery(query: GetDevicesDTO) {
    const where = {}

    if (query._id && ObjectId.isValid(query._id)) {
        where["_id"] = new ObjectId(query._id)
    }

    if (query.user_id && ObjectId.isValid(query.user_id)) {
        where["user_id"] = new ObjectId(query.user_id)
    }

    if (query.model) {
        where["model"] = query.model
    }

    if (query.status) {
        where["status"] = query.status
    }

    return where
}