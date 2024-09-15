import SelectField from "@components/form/select-field"
import { DevicesFiltersContext } from "@contexts/devices-filters"
import { UsersContext } from "@contexts/users"
import { useContext } from "react"
import { devicesStatus } from "."
import { DeviceStatusText } from "./device-card"

export default function SearchSection({}) {
  const { filters, setFilters } = useContext(DevicesFiltersContext)
  const { users } = useContext(UsersContext)

  const usersOptions = Object.values(users).map((user) => ({ value: user._id, label: user.name }))
  const statusOptions = devicesStatus.map((status) => ({ value: status, label: DeviceStatusText[status] }))
  // @ts-expect-error: it's okay to have undefined as a value
  usersOptions.unshift({ value: undefined, label: "Todos" })
  // @ts-expect-error: it's okay to have undefined as a value
  statusOptions.unshift({ value: undefined, label: "Todos" })

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Pesquisar por modelo"
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
        className="text-black grow p-2 border bg-gray-20 border-gray-300 rounded focus:border-green-dark focus:shadow-blur focus:shadow-color-green-dark-20 focus:outline-none"
      />

      <SelectField
        label="Selecione um cliente"
        labelAsPlaceholder
        options={usersOptions}
        onSelect={(option) => setFilters({ ...filters, user_id: option.value })}
      />

      <SelectField
        label="Selecione um status"
        labelAsPlaceholder
        options={statusOptions}
        onSelect={(option) => setFilters({ ...filters, status: option.value })}
      />
    </div>
  )
}
