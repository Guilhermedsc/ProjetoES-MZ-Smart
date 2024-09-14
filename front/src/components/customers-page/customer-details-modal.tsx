'use client'

import ConfirmModal from "@components/modal/confirm-modal"
import Modal from "@components/modal/modal"
import { useState } from "react"
import RegisterCustomerModal from "./register-customer-modal"
import { deleteUser } from "@api/users"

type CustomerDetailsModalProps = {
  customer: Users | null
  onClose: () => void
}

export default function CustomerDetailsModal({ customer, onClose }: CustomerDetailsModalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  if (customer == null) return null

  async function deleteCustomer() {
    setIsDeleting(false)

    const response = await deleteUser(customer!._id)

    if (response.ok) {
      alert('Cliente deletado com sucesso!')
      window.location.reload()
      onClose()
      return
    }

    alert('Erro ao deletar cliente')
  }

  return (
    <>
      <Modal isOpen={Boolean(customer)} onClose={onClose}>
        <div className="flex flex-col gap-3 text-md">
          <h2><strong>Cliente:</strong> {customer.name}</h2>
          <p><strong>Telefone:</strong> {customer.phone_number}</p>
          <p><strong>CPF:</strong> {customer.cpf}</p>

          <div className="flex gap-1">
            <button type="button" onClick={() => setIsDeleting(true)} className="bg-red-500 text-white font-bold p-2 rounded w-1/2">Deletar</button>
            <button type="button" onClick={() => setIsEditing(true)} className="bg-green-dark text-white font-bold p-2 rounded w-1/2">Editar</button>
          </div>
        </div>
      </Modal>

      <RegisterCustomerModal
        initialData={customer}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
      />

      <ConfirmModal
        message="Deseja realmente excluir este cliente?"
        isOpen={isDeleting}
        onCancel={() => setIsDeleting(false)}
        onConfirm={deleteCustomer}
      />
    </>
  )

}