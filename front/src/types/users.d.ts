type Users = {
  _id: string
  cpf: string
  name: string
  phone_number: string
}

type CreateUser = Omit<Users, '_id'>
type UpdateUser = Partial<Omit<CreateUser, 'cpf'>>

type UsersFilters = Partial<Pick<Users, 'name' | 'cpf'>>