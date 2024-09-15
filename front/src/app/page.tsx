'use client'

import Homepage from "@components/homepage"
import { DevicesFiltersProvider } from "@contexts/devices-filters"
import { UsersProvider } from "@contexts/users"

export default function Home() {
  return (
    <UsersProvider>
      <DevicesFiltersProvider>
        <Homepage />
      </DevicesFiltersProvider>
    </UsersProvider>
  )
}
