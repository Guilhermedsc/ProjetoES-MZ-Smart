import { UpdateDeviceSolution } from "@api/devices"
import TextAreaField from "@components/form/text-area-field"
import TextField from "@components/form/text-field"
import Modal from "@components/modal/modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type UpdateDeviceSolutionModalProps = {
  device: Devices | null
  onClose: () => void
}

const updateDeviceSolutionFormSchema = z.object({
  solution_description: z.string().trim().min(3, "Muito curto").max(3000, "Muito longo"),
  value: z.coerce.number().min(0, "Campo obrigatório"),
})
type UpdateDeviceSolutionFormSchema = z.infer<typeof updateDeviceSolutionFormSchema>

export default function UpdateDeviceSolutionModal({ device, onClose }: UpdateDeviceSolutionModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, register, formState: { errors } } = useForm<UpdateDeviceSolutionFormSchema>({
    resolver: zodResolver(updateDeviceSolutionFormSchema),
    defaultValues: {
      solution_description: "",
      value: 0,
    }
  })

  async function handleSubmitForm(data: UpdateDeviceSolutionFormSchema) {
    if (isLoading) return

    setIsLoading(true)
    const response = await UpdateDeviceSolution(device!._id, data)
    if (!response.ok) {
      alert("Erro ao atualizar solução")
      setIsLoading(false)
      return
    }

    alert("Solução atualizada com sucesso!")
    window.location.reload()
  }

  return (
    <Modal isOpen={Boolean(device)} onClose={onClose}>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-4 w-modal-width">
        <TextField label="Valor" error={errors.value?.message} {...register("value")} type="number" step="0.1" />
        <TextAreaField label="Descrição da solução" error={errors.solution_description?.message} {...register("solution_description")} />
        <button type="submit" className="bg-green-dark text-white font-bold p-2 rounded" disabled={isLoading}>Atualizar</button>
      </form>
    </Modal>
  )
}