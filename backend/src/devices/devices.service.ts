import { Inject, Injectable, NotFoundException } from "@nestjs/common"
import { constants } from "src/utils/constants"
import { ObjectId, Repository } from "typeorm"
import { Devices } from "./devices.entity"
import { CreateDeviceDTO } from "./dots/create.devices.dto"
import { UpdateDeviceSolutionDTO, UpdateDeviceStatusDTO } from "./dots/update.devices.dto"
import { GetDevicesDTO } from "./dots/get.devices.dto"
import { checkDevice, constructQuery } from "./devices.utils"

@Injectable()
export class DevicesService {
    constructor (
        @Inject(constants.DevicesRepository)
        private readonly repository: Repository<Devices>
    ) {}

    async create(device: CreateDeviceDTO) {
        const new_device = await this.repository.save({
            ...device,
            registered_at: new Date(),
            status: "new"
        })
        return { _id: new_device._id }
    }

    async getAll(query: GetDevicesDTO) {
        const db_query = constructQuery(query)
        return await this.repository.find(db_query)
    }

    async updateStatus(id: string, data: UpdateDeviceStatusDTO) {
        const _id = checkDevice(id, this.repository)
        return await this.repository.update(_id, { status: data.status })
    }

    async updateSolution(id: string, data: UpdateDeviceSolutionDTO) {
        const _id = checkDevice(id, this.repository)
        return await this.repository.update(_id, {
            value: data.value,
            status: "waiting_payment",
            solution_description: data.solution_description,
            solution_at: new Date()
        })
    }
}