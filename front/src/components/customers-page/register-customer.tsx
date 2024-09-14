'use client'

import { useState } from "react"
import RegisterCustomerModal from "./register-customer-modal"


export default function RegisterCustomer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        title="Cadastrar Cliente"
        className="absolute right-1 w-8 h-8 rounded-full bg-green-dark text-white text-2xl font-bold shadow-md p-1 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>

      <RegisterCustomerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}