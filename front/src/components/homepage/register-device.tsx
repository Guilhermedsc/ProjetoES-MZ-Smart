'use client'

import { useState } from "react"
import RegisterDeviceModal from "./register-device-modal"


export default function RegisterDevice() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        title="Cadastrar Dispositivo"
        className="absolute right-1 w-8 h-8 rounded-full bg-green-dark text-white text-2xl font-bold shadow-md p-1 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>

      <RegisterDeviceModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}