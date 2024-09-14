'use client'

import Homepage from "@components/homepage"
import { UsersProvider } from "@contexts/users"

export default function Home() {
  return (
    <UsersProvider>
      <Homepage />
    </UsersProvider>
  )
}
