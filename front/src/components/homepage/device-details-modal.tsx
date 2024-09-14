'use client'

import { deleteDevice, updateDeviceStatus } from "@api/devices"
import ConfirmModal from "@components/modal/confirm-modal"
import Modal from "@components/modal/modal"
import { useContext, useState } from "react"
import { UsersContext } from "@contexts/users"
import { formatDatetime } from "@utils/string"
import { DeviceStatusText } from "./device-card"
import UpdateDeviceSolutionModal from "./update-device-solution-modal"

type DeviceDetailsModalProps = {
  device: Devices | null
  onClose: () => void
}

const DeviceStatusOptions: Record<DeviceStatus, DeviceStatus[]> = {
  new: ["waiting_for_parts", "in_progress"],
  waiting_for_parts: ["in_progress"],
  in_progress: ["waiting_payment"],
  waiting_payment: ["done"],
  done: []
}

export default function DeviceDetailsModal({ device, onClose }: DeviceDetailsModalProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isUpdatingSolution, setIsUpdatingSolution] = useState<Devices | null>(null)
  const { users } = useContext(UsersContext)

  if (device == null) return null

  async function removeDevice() {
    setIsDeleting(false)

    const response = await deleteDevice(device!._id)

    if (!response.ok) {
      alert('Erro ao deletar aparelho')
      return
    }

    alert('Aparelho removido com sucesso!')
    window.location.reload()
    onClose()
  }

  async function updateDevice(status: DeviceStatus) {
    if (status === "waiting_payment") {
      setIsUpdatingSolution(device)
      return
    }

    const response = await updateDeviceStatus(device!._id, {status})
    if (!response.ok) {
      alert('Erro ao atualizar aparelho')
      return
    }

    alert('Aparelho atualizado com sucesso!')
    window.location.reload()
  }

  return (
    <>
      <Modal isOpen={Boolean(device)} onClose={onClose}>
        <div className="flex flex-col gap-2 text-md">
          <h2 className="mb-2"><strong>Cliente:</strong> {users[device.user_id].name}</h2>
          <p><strong>Modelo:</strong> {device.model}</p>
          <p><strong>IMEI:</strong> {device.IMEI || <em className="text-gray">Não Informado</em>}</p>
          <p><strong>Senha:</strong> {device.password || <em className="text-gray">Não Informado</em>}</p>
          <p><strong>Data de entrada:</strong> {formatDatetime(device.registered_at)}</p>
          <p><strong>Status:</strong> {DeviceStatusText[device.status]}</p>

          <div className="mt-2 flex flex-col">
            <strong>Descrição:</strong>
            <span className="border bg-gray-20 rounded p-2 whitespace-pre-wrap overflow-auto max-w-modal-width max-h-80">
              {device.description || <em className="text-gray">Não Informado</em>}
            </span>
          </div>

          <div className="mt-2 flex flex-col">
            <strong>Atualizar:</strong>
            {DeviceStatusOptions[device.status].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => updateDevice(status)}
                className="bg-blue-500 text-white font-bold p-2 rounded mt-1">
                  {DeviceStatusText[status]}
                </button>
            ))}
          </div>

          <button type="button" onClick={() => setIsDeleting(true)} className="bg-red-500 text-white font-bold p-2 rounded">Deletar</button>
        </div>
      </Modal>

      <ConfirmModal
        message="Deseja realmente excluir este aparelho?"
        isOpen={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onConfirm={removeDevice}
      />

      <UpdateDeviceSolutionModal
        device={isUpdatingSolution}
        onClose={() => setIsUpdatingSolution(null)}
      />
    </>
  )

}