import Modal from "./modal"

type ConfirmModalProps = {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <div className="flex flex-col gap-3 text-md">
        <h2>{message}</h2>
        <div className="flex gap-1">
          <button type="button" onClick={onCancel} className="bg-red-500 text-white font-bold p-2 rounded w-1/2">Cancelar</button>
          <button type="button" onClick={onConfirm} className="bg-green-dark text-white font-bold p-2 rounded w-1/2">Confirmar</button>
        </div>
      </div>
    </Modal>
  )
}