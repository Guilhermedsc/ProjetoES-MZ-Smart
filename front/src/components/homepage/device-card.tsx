import Card from "@components/card/card"
import { UsersContext } from "@contexts/users"
import { useContext } from "react"

export const DeviceStatusText: Record<DeviceStatus, string> = {
  new: 'Aguardando Avaliação',
  waiting_for_parts: 'Aguardando Peças',
  in_progress: 'Em Manutenção',
  waiting_payment: 'Aguardando Pagamento',
  done: 'Concluído',
}

type DeviceCardProps = {
  device: Devices
  onClick?: (device: Devices) => void
}

let printed = false

export default function DeviceCard({ device, onClick }: DeviceCardProps) {
  const { users } = useContext(UsersContext)

  if (!Object.keys(users).includes(device.user_id) && !printed) {
    console.table(users)
    console.log(device)
    printed = true
  }

  return (
    <Card className="text-gray-dark h-fit" tabIndex={0} onClick={onClick ? () => onClick(device) : undefined}>
      <h2 className="mb-2"><strong>Cliente:</strong> {users[device.user_id].name}</h2>
      <p className="text-sm"><strong>Aparelho:</strong> {device.model}</p>
      <p className="text-sm"><strong>Status:</strong> {DeviceStatusText[device.status]}</p>
    </Card>
  )
}