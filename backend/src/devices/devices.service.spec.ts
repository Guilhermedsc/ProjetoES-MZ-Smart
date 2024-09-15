import { DevicesService } from './devices.service';
import { Repository } from 'typeorm';
import { Devices } from './devices.entity';
import { CreateDeviceDTO } from './dots/create.devices.dto';
import { UpdateDeviceSolutionDTO, UpdateDeviceStatusDTO, DeviceStatus } from './dots/update.devices.dto';
import { GetDevicesDTO } from './dots/get.devices.dto';
import { NotFoundException } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { checkDevice, constructQuery } from './devices.utils';

// Mock do repositório e da função checkDevice
const mockRepository = () => ({
    save: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findOne: jest.fn()
});


describe('DevicesService', () => {
    let devicesService: DevicesService;
    let repository: Repository<Devices>;

    beforeEach(() => {
        repository = mockRepository() as any;
        devicesService = new DevicesService(repository);
    });

    describe('create', () => {
        it('should create a new device', async () => {
            const userId = new ObjectId(); // Cria um ObjectId diretamente
            const newDevice: CreateDeviceDTO = {
                model: "Model123",
                description: "TESTE",
                user_id: userId
            };
            const savedDevice = {
                _id: new ObjectId(),
                ...newDevice,
                registered_at: new Date(),
                status: "new"
            };

            jest.spyOn(repository, 'save').mockResolvedValue(savedDevice as any);

            const result = await devicesService.create(newDevice);

            expect(result).toEqual({ _id: savedDevice._id });
            expect(repository.save).toHaveBeenCalledWith({
                ...newDevice,
                user_id: userId,
                registered_at: expect.any(Date),
                status: "new"
            });
        });
    });

    describe('getAll', () => {
        it('should return all devices', async () => {
            const query: GetDevicesDTO = {}; // Ajuste conforme necessário
            const devices = [
                { _id: new ObjectId(), model: "Model123", description: "TESTE", user_id: new ObjectId(), registered_at: new Date(), status: "done", value: 100 }
                // Adicione mais dispositivos conforme necessário
            ];

            // mockConstructQuery.mockReturnValue({}); // Mock para a função constructQuery
            jest.spyOn(repository, 'find').mockResolvedValue(devices as any);

            const result = await devicesService.getAll(query);

            expect(result).toEqual(devices);
            expect(repository.find).toHaveBeenCalledWith({});
        });
    });

    describe('updateStatus', () => {
        it('should update the device status', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente
            const statusUpdate: UpdateDeviceStatusDTO = { status: "in_progress" as DeviceStatus };


            jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(true as any)

            const result = await devicesService.updateStatus(id.toHexString(), statusUpdate);

            expect(result).toEqual({ affected: 1 });
            expect(repository.update).toHaveBeenCalledWith(id, { status: statusUpdate.status });
        });

        it('should throw NotFoundException if device is not found', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente
            const statusUpdate: UpdateDeviceStatusDTO = { status: "in_progress" };

            jest.spyOn(repository, 'update').mockResolvedValue({ affected: 0 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(false as any)

            await expect(devicesService.updateStatus(id.toHexString(), statusUpdate)).rejects.toThrow(NotFoundException);
        });
    });

    describe('updateSolution', () => {
        it('should update the device solution', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente
            const updateData: UpdateDeviceSolutionDTO = {
                solution_description: "New Solution",
                value: 200
            };

            jest.spyOn(repository, 'update').mockResolvedValue({ affected: 1 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(true as any)

            const result = await devicesService.updateSolution(id.toHexString(), updateData);

            expect(result).toEqual({ affected: 1 });
            expect(repository.update).toHaveBeenCalledWith(id, {
                value: updateData.value,
                status: "waiting_payment",
                solution_description: updateData.solution_description,
                solution_at: expect.any(Date)
            });
        });

        it('should throw NotFoundException if device is not found', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente
            const updateData: UpdateDeviceSolutionDTO = {
                solution_description: "New Solution",
                value: 200
            };

            jest.spyOn(repository, 'update').mockResolvedValue({ affected: 0 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(false as any)

            await expect(devicesService.updateSolution(id.toHexString(), updateData)).rejects.toThrow(NotFoundException);
        });
    });

    describe('delete', () => {
        it('should delete a device', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente

            jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(true as any)

            const result = await devicesService.delete(id.toHexString());

            expect(result).toEqual({ message: "Device deleted successfully" });
            expect(repository.delete).toHaveBeenCalledWith(id);
        });

        it('should throw NotFoundException if device is not found', async () => {
            const id = new ObjectId(); // Cria um ObjectId diretamente

            jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 0 } as any);
            jest.spyOn(repository, 'findOne').mockResolvedValue(false as any)

            await expect(devicesService.delete(id.toHexString())).rejects.toThrow(NotFoundException);
        });
    });

    describe('deleteAllOfUser', () => {
        it('should delete all devices of a user', async () => {
            const userId = new ObjectId();
            jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);

            const result = await devicesService.deleteAllOfUser(userId);

            expect(result).toEqual({ affected: 1 });
            expect(repository.delete).toHaveBeenCalledWith({ user_id: userId });
        });
    });
});
