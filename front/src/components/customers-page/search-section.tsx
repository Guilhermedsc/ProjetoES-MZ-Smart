import { UsersFiltersContext } from "@contexts/users-filters"
import { useContext } from "react"

export default function SearchSection({}) {
  const { filters, setFilters } = useContext(UsersFiltersContext)

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        className="text-black grow p-2 border bg-gray-20 border-gray-300 rounded focus:border-green-dark focus:shadow-blur focus:shadow-color-green-dark-20 focus:outline-none"
      />

      <input
        type="text"
        placeholder="Pesquisar por CPF"
        value={filters.cpf}
        onChange={(e) => setFilters({ ...filters, cpf: e.target.value })}
        className="text-black grow p-2 border bg-gray-20 border-gray-300 rounded focus:border-green-dark focus:shadow-blur focus:shadow-color-green-dark-20 focus:outline-none"
      />
    </div>
  )
}
