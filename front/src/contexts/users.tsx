import { createContext, use, useState } from "react"

type UsersContextProps = {
  users: Record<string, Users>
  setUsers: (users: Users[]) => void
}
type UsersProviderProps = {
  children: React.ReactNode
}

export const UsersContext = createContext<UsersContextProps>({ users: {}, setUsers: () => {} })

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<Record<string, Users>>({})

  function setUsersRecord(users: Users[]) {
    const usersRecord: Record<string, Users> = {}
    users.forEach((user) => {
      usersRecord[user._id] = user
    })

    setUsers(usersRecord)
  }

  return (
    <UsersContext.Provider value={{ users, setUsers: setUsersRecord }}>
      {children}
    </UsersContext.Provider>
  )
}