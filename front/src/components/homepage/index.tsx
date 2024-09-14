import RegisterDevice from "./register-device"
import Spinning from "../spinning"
import { useContext, useEffect, useState } from "react"
import { getDevices } from "@api/devices"
import DeviceCard from "./device-card"
import DeviceDetailsModal from "./device-details-modal"
import { UsersContext } from "@contexts/users"
import { getUsers } from "@api/users"

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true)
  const [devices, setDevices] = useState<Devices[]>([])
  const [selectedDevice, setSelectedDevice] = useState<Devices | null>(null)
  const { setUsers } = useContext(UsersContext)

  useEffect(() => {
    Promise.all([
      getDevices().then((response) => response.json()),
      getUsers().then((response) => response.json())
    ]).then(([devicesResponse, usersResponse]) => {
      setDevices(devicesResponse)
      setUsers(usersResponse)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <span className="relative flex items-center justify-center mb-4">
        <h1 className="text-green-dark text-xl md:text-3xl font-bold">Tabela de Dispositivos</h1>
        <RegisterDevice />
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 min-h-[25rem] max-h-[calc(100vh-15rem)] overflow-y-auto p-1">
        {isLoading
          ? <Spinning />
          : devices.map((device) => (
            <DeviceCard key={device._id} device={device} onClick={setSelectedDevice} />
          ))
        }
      </div>

      <DeviceDetailsModal device={selectedDevice} onClose={() => setSelectedDevice(null)} />
    </div>
  )
}