import { DeviceStatus } from "./update.devices.dto"

export class GetDevicesDTO {
    _id?: string
    user_id?: string
    model?: string
    status?: DeviceStatus
}
