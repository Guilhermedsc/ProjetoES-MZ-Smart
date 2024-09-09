import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common"
import { constants } from "src/utils/constants"
import { DevicesService } from "./devices.service"
import { CreateDeviceDTO } from "./dots/create.devices.dto"
import { UpdateDeviceSolutionDTO, UpdateDeviceStatusDTO } from "./dots/update.devices.dto"
import { GetDevicesDTO } from "./dots/get.devices.dto"

@Controller(constants.DevicesController)
export class DevicesController {
    constructor(
        private readonly service: DevicesService
    ) {}

    @Post()
    async createDevice(@Body() data: CreateDeviceDTO) {
        return await this.service.create(data)
    }

    @Get()
    async getAllDevices(@Query() query: GetDevicesDTO) {
        return await this.service.getAll(query)
    }

    @Put(':id/status')
    async updateDeviceStatus(@Param('id') id: string, @Body() data: UpdateDeviceStatusDTO) {
        return await this.service.updateStatus(id, data)
    }

    @Put(':id/solution')
    async updateDeviceSolution(@Param('id') id: string, @Body() data: UpdateDeviceSolutionDTO) {
        return await this.service.updateSolution(id, data)
    }

    @Delete(':id')
    async deleteDevice(@Param('id') id: string) {
        return await this.service.delete(id)
    }
}