const devicesStatus = ['new', 'waiting_for_parts', 'in_progress', 'waiting_payment', 'done'] as const
type DeviceStatus = typeof devicesStatus[number]

type Devices = {
  _id: string
  user_id: string
  model: string
  description: string
  registered_at: string
  status: DeviceStatus
  value: number
  IMEI?: string
  password?: string
  solution_description?: string
  solution_at?: string
}

type CreateDevice = Pick<Devices, 'user_id' | 'model' | 'description' | 'IMEI' | 'password'>
type UpdateDeviceStatus = Pick<Devices, 'status'>
type UpdateDeviceSolution = Pick<Devices, 'solution_description' | 'value'>
