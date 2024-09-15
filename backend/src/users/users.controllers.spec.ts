import { ObjectId } from "mongodb"
import { UsersController } from "./users.controller"
import { Users } from "./users.entity"
import { UsersService } from "./users.service"
import { CreateUserDTO } from "./dtos/create.users.dto"
import { UpdateUserDTO } from "./dtos/update.users.dto"

describe('Unit tests of Users Controller', () => {
    let usersController: UsersController
    let usersService: UsersService

    beforeEach(() => {
        usersService = new UsersService(null, null)
        usersController = new UsersController(usersService)
    })

    describe('getUsers', () => {
        it('It should return the list of registered users', async () => {
            const users: Users[] = [{_id: new ObjectId(), name: "Some User", cpf: "12345678901", phone_number: "123456789"}]
            jest.spyOn(usersService, 'getAll').mockImplementation(async () => users)

            expect(await usersController.getUsers()).toBe(users)
        })
    })

    describe('createUser', () => {
        it('It should create a new user', async () => {
            const newUser: CreateUserDTO = { name: "New User", cpf: "98765432100", phone_number: "987654321" }
            const createdUser = { _id: new ObjectId(), ...newUser }
            jest.spyOn(usersService, 'create').mockImplementation(async () => createdUser)

            expect(await usersController.createUser(newUser)).toBe(createdUser)
        })
    })

    describe('deleteUser', () => {
        it('It should delete a user by ID', async () => {
            const userId = '12345'
            const result = { raw: {}, affected: 1 } // Corrigido para refletir o tipo DeleteResult
            jest.spyOn(usersService, 'deleteUser').mockImplementation(async () => result)

            expect(await usersController.deleteUser(userId)).toBe(result)
        })
    })

    describe('updateUser', () => {
        it('It should update a user by ID', async () => {
            const userId = new ObjectId() // Corrigido para usar ObjectId
            const updateUser: UpdateUserDTO = { name: "Updated User", phone_number: "987654321" } // Removido cpf se não fizer parte de UpdateUserDTO
            const updatedUser = { _id: userId, name: "Updated User", cpf: "98765432100", phone_number: "987654321" }
            jest.spyOn(usersService, 'updateUser').mockImplementation(async () => updatedUser)

            expect(await usersController.updateUser(userId.toString(), updateUser)).toBe(updatedUser)
        })
    })
})
