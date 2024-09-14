import customFetch from "."

export function getUsers() {
  return customFetch('/users', {
    method: 'GET'
  })
}

export function createUser(data: CreateUser) {
  return customFetch('/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function updateUser(id: string, data: UpdateUser) {
  return customFetch(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function deleteUser(id: string) {
  return customFetch(`/users/${id}`, {
    method: 'DELETE'
  })
}
