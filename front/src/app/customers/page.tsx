'use client'

import CustomersPage from "@components/customers-page"
import { UsersFiltersProvider } from "@contexts/users-filters"

export default function Customers() {
  return (
    <UsersFiltersProvider>
      <CustomersPage />
    </UsersFiltersProvider>
  )
}