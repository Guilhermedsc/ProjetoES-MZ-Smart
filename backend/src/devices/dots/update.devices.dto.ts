import { IsIn, IsNumber, IsString, Length, Min } from "class-validator"

const devicesStatus = ['new', 'waiting_for_parts', 'in_progress', 'waiting_payment', 'done'] as const
export type DeviceStatus = typeof devicesStatus[number]

export class UpdateDeviceStatusDTO {
    @IsString()
    @IsIn(devicesStatus)
    status: DeviceStatus
}

export class UpdateDeviceSolutionDTO {
    @IsNumber()
    @Min(0)
    value: number

    @IsString()
    @Length(0, 3000)
    solution_description: string
}

