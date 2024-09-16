import { z } from "zod"
import Modal, { ModalProps } from "@components/modal/modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import TextField from "@components/form/text-field"
import { createUser, updateUser } from "@api/users"

type RegisterCustomerModalProps = Omit<ModalProps, "children"> & {
  initialData?: Users
}

const registerCustomerFormSchema = z.object({
  cpf: z.string().trim().transform((cpf) => cpf.replaceAll(/\D/g, "")).refine((cpf) => cpf.length === 11, { message: "CPF inválido" }),
  name: z.string().trim().min(3, "Muito curto").max(100, "Muito longo"),
  phone_number: z.string().trim().min(8, "Muito curto").max(16, "Muito longo").transform((phone_number) => phone_number.replaceAll(/\D/g, "")),
})
type RegisterCustomerFormSchema = z.infer<typeof registerCustomerFormSchema>

export default function RegisterCustomerModal({ initialData, ...props }: RegisterCustomerModalProps) {
  const isEditing = Boolean(initialData)

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, register, reset, formState: { errors } } = useForm<RegisterCustomerFormSchema>({
    resolver: zodResolver(registerCustomerFormSchema),
    defaultValues: {...initialData}
  })

  function registerCustomer(data: RegisterCustomerFormSchema) {
    return createUser({
      cpf: data.cpf,
      name: data.name,
      phone_number: data.phone_number,
    })
  }

  function updateCustomer(data: RegisterCustomerFormSchema) {
    return updateUser(initialData!._id, {
      name: data.name,
      phone_number: data.phone_number,
    })
  }

  async function hanldeFinish(data: RegisterCustomerFormSchema) {
    if (isLoading) return

    setIsLoading(true)
    const response = await (isEditing ? updateCustomer(data) : registerCustomer(data))
    if (response.ok) {
      const message = isEditing ? 'Cliente atualizado com sucesso!' : 'Cliente cadastrado com sucesso!'
      alert(message)
      window.location.reload()
      props.onClose()
    } else {
      const responseBody = await response.json()
      alert('Erro: ' + responseBody.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (props.isOpen) {
      reset()
    }
  }, [props.isOpen, reset])

  return (
    <Modal {...props} >
      <form onSubmit={handleSubmit(hanldeFinish)} className="flex flex-col gap-4 w-80">
        <TextField label="CPF" {...register("cpf")} error={errors.cpf?.message} disabled={isEditing} />
        <TextField label="Nome" {...register("name")} error={errors.name?.message} />
        <TextField label="Telefone" {...register("phone_number")} error={errors.phone_number?.message} />
        <button type="submit" className="bg-green-dark text-white font-bold p-2 rounded" disabled={isLoading}>{isEditing ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </Modal>
  )
}