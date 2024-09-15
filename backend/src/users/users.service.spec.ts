import { NotFoundException, ConflictException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { Repository, DeleteResult } from "typeorm";
import { Users } from "./users.entity";
import { CreateUserDTO } from "./dtos/create.users.dto";
import { getRepositoryToken } from "@nestjs/typeorm";
import { ObjectId } from "mongodb";
import { DevicesService } from "src/devices/devices.service";
import { UpdateUserDTO } from "./dtos/update.users.dto";

// Mock do repositório
const mockRepository = () => ({
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
});

const mockDevicesService = () => ({
    deleteAllOfUser: jest.fn(),
});

describe('UsersService', () => {
    let usersService: UsersService;
    let repository: Repository<Users>;
    let devicesService: DevicesService;

    beforeEach(async () => {
        repository = mockRepository() as any;
        devicesService = mockDevicesService() as any;
        usersService = new UsersService(repository, devicesService);
    });

    describe('create', () => {
        it('should throw a ConflictException if CPF already exists', async () => {
            const createUserDTO: CreateUserDTO = { cpf: '12345678900', name: 'John Doe', phone_number: '999999999' };

            jest.spyOn(repository, 'findOne').mockResolvedValue({} as Users);

            await expect(usersService.create(createUserDTO)).rejects.toThrow(ConflictException);
        });

        it('should create a new user and return its _id', async () => {
            const createUserDTO: CreateUserDTO = { cpf: '12345678900', name: 'John Doe', phone_number: '999999999' };
            const newUser = { _id: new ObjectId(), ...createUserDTO };

            jest.spyOn(repository, 'findOne').mockResolvedValue(null);
            jest.spyOn(repository, 'save').mockResolvedValue(newUser as Users);

            const result = await usersService.create(createUserDTO);

            expect(result).toEqual({ _id: newUser._id });
            expect(repository.save).toHaveBeenCalledWith(createUserDTO);
        });
    });

    describe('getAll', () => {
        it('should return all users', async () => {
            const users = [
                { _id: new ObjectId(), cpf: '12345678900', name: 'John Doe', phone_number: '999999999' },
                // Adicione mais usuários conforme necessário
            ];

            jest.spyOn(repository, 'find').mockResolvedValue(users as Users[]);

            const result = await usersService.getAll();

            expect(result).toEqual(users);
            expect(repository.find).toHaveBeenCalled();
        });
    });

    describe('deleteUser', () => {
        it('should delete a user by id', async () => {
            const id = new ObjectId().toHexString();
            const _id = new ObjectId(id);

            jest.spyOn(repository, 'findOne').mockResolvedValue({ _id } as Users);
            jest.spyOn(devicesService, 'deleteAllOfUser').mockResolvedValue({ raw: {}, affected: 1 } as DeleteResult);
            jest.spyOn(repository, 'delete').mockResolvedValue({ raw: {}, affected: 1 } as DeleteResult);

            const result = await usersService.deleteUser(id);

            expect(result).toEqual({ raw: {}, affected: 1 });
            expect(devicesService.deleteAllOfUser).toHaveBeenCalledWith(_id);
            expect(repository.delete).toHaveBeenCalledWith(_id);
        });

        it('should throw a NotFoundException if user is not found', async () => {
            const id = new ObjectId().toHexString();

            jest.spyOn(repository, 'findOne').mockResolvedValue(null);

            await expect(usersService.deleteUser(id)).rejects.toThrow(NotFoundException);
        });
    });

    describe('updateUser', () => {
        it('should update a user and return the updated user', async () => {
            const id = new ObjectId().toHexString();
            const updateUserDTO: UpdateUserDTO = { name: 'Jane Doe', phone_number: '888888888' };
            const user = { _id: new ObjectId(), cpf: '12345678900', name: 'John Doe', phone_number: '999999999' };
            const updatedUser = { ...user, ...updateUserDTO };

            jest.spyOn(repository, 'findOne').mockResolvedValue(user as Users);
            jest.spyOn(repository, 'save').mockResolvedValue(updatedUser as Users);

            const result = await usersService.updateUser(id, updateUserDTO);

            expect(result).toEqual(updatedUser);
            expect(repository.findOne).toHaveBeenCalledWith({ where: { _id: new ObjectId(id) } });
            expect(repository.save).toHaveBeenCalledWith(updatedUser);
        });

        it('should throw a NotFoundException if user is not found', async () => {
            const id = new ObjectId().toHexString();
            const updateUserDTO: UpdateUserDTO = { name: 'Jane Doe', phone_number: '888888888' };

            jest.spyOn(repository, 'findOne').mockResolvedValue(null);

            await expect(usersService.updateUser(id, updateUserDTO)).rejects.toThrow(NotFoundException);
        });
    });
});
