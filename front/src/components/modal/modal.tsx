'use client'

import { useEffect, useRef } from "react"

export type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keyup", handleKeyUp)
    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <dialog
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 w-full h-full"
      ref={dialogRef}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className="bg-white p-4 rounded-md shadow-md">
        {children}
      </div>
    </dialog>
  )
}