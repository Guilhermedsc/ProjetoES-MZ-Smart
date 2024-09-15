import { normalizeString } from "@utils/string"
import { createContext, useState } from "react"

type DevicesFiltersContextProps = {
  filters: DevicesFilters
  setFilters: (filters: DevicesFilters) => void
  applyFilters: (devices: Devices[]) => Devices[]
}
type DevicesFiltersProps = {
  children: React.ReactNode
}

export const DevicesFiltersContext = createContext<DevicesFiltersContextProps>({ filters: {}, setFilters: () => {}, applyFilters: (devices) => devices })

export const DevicesFiltersProvider = ({ children }: DevicesFiltersProps) => {
  const [filters, setFilters] = useState<DevicesFilters>({})

  function applyFilters(devices: Devices[]): Devices[] {
    return devices.filter((device) => {
      if (filters.user_id && device.user_id !== filters.user_id) return false
      if (filters.model && !normalizeString(device.model).includes(normalizeString(filters.model))) return false
      if (filters.status && device.status !== filters.status) return false

      return true
    })
  }

  return (
    <DevicesFiltersContext.Provider value={{ filters, setFilters, applyFilters }}>
      {children}
    </DevicesFiltersContext.Provider>
  )
}
