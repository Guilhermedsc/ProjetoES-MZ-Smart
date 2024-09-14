import { z } from "zod"
import TextField from "@components/form/text-field"
import Modal, { ModalProps } from "@components/modal/modal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect, useState } from "react"
import { createDevice } from "@api/devices"
import { UsersContext } from "@contexts/users"
import SelectField from "@components/form/select-field"
import TextAreaField from "@components/form/text-area-field"

type RegisterDeviceModalProps = Omit<ModalProps, "children">

const registerDeviceFormSchema = z.object({
  user_id: z.string().trim().min(0, "Campo obrigatório"),
  model: z.string().trim().min(3, "Muito curto").max(100, "Muito longo"),
  description: z.string().trim().max(3000, "Muito longo"),
  imei: z.string().trim().optional(),
  password: z.string().trim().optional(),
})

type RegisterDeviceFormSchema = z.infer<typeof registerDeviceFormSchema>

export default function RegisterDeviceModal({ ...props }: RegisterDeviceModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { users } = useContext(UsersContext)

  const usersOptions = Object.values(users).map((user) => ({ value: user, label: user.name }))

  const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm<RegisterDeviceFormSchema>({
    resolver: zodResolver(registerDeviceFormSchema),
    defaultValues: {
      description: ""
    }
  })

  console.table(errors)

  function registerDevice(data: RegisterDeviceFormSchema) {
    console.log(data)
    return createDevice({
      user_id: data.user_id,
      model: data.model,
      description: data.description,
      IMEI: data.imei,
      password: data.password,
    })
  }

  async function hanldeFinish(data: RegisterDeviceFormSchema) {
    if (isLoading) return

    setIsLoading(true)
    const response = await registerDevice(data)
    if (!response.ok) {
      const responseBody = await response.json()
      alert('Erro: ' + responseBody.message)
      setIsLoading(false)
    }

    alert('Aparelho cadastrado com sucesso!')
    window.location.reload()
    props.onClose()
  }

  useEffect(() => {
    if (props.isOpen) {
      reset()
    }
  }, [props.isOpen])

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit(hanldeFinish)} className="flex flex-col gap-4 w-modal-width">
        <SelectField<Users>
          label="Cliente"
          name="user_id"
          onSelect={(option) => setValue("user_id", option.value._id)}
          options={usersOptions}
          error={errors.user_id?.message}
        />

        <TextField label="Modelo" {...register("model")} error={errors.model?.message} />
        <TextField label="IMEI" {...register("imei")} error={errors.imei?.message} />
        <TextField label="Senha" {...register("password")} error={errors.password?.message} />

        <TextAreaField label="Descrição" {...register("description")} error={errors.description?.message} />

        <button type="submit" className="bg-green-dark text-white font-bold p-2 rounded" disabled={isLoading}>Cadastrar</button>
      </form>
    </Modal>
  )
}