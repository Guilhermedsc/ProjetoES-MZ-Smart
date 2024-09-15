import { normalizeString } from "@utils/string"
import { createContext, useState } from "react"

type UsersFiltersContextProps = {
  filters: UsersFilters
  setFilters: (filters: UsersFilters) => void
  applyFilters: (devices: Users[]) => Users[]
}
type UsersFiltersProps = {
  children: React.ReactNode
}

export const UsersFiltersContext = createContext<UsersFiltersContextProps>({ filters: {}, setFilters: () => {}, applyFilters: (devices) => devices })

export const UsersFiltersProvider = ({ children }: UsersFiltersProps) => {
  const [filters, setFilters] = useState<UsersFilters>({})

  function applyFilters(users: Users[]): Users[] {
    return users.filter((user) => {
      if (filters.name && !normalizeString(user.name).includes(normalizeString(filters.name))) return false
      if (filters.cpf && !normalizeString(user.cpf).includes(normalizeString(filters.cpf))) return false

      return true
    })
  }

  return (
    <UsersFiltersContext.Provider value={{ filters, setFilters, applyFilters }}>
      {children}
    </UsersFiltersContext.Provider>
  )
}
