import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { CreateDeviceDTO } from './dots/create.devices.dto';
import { UpdateDeviceSolutionDTO, UpdateDeviceStatusDTO, DeviceStatus } from './dots/update.devices.dto';
import { GetDevicesDTO } from './dots/get.devices.dto';
import { ObjectId } from "mongodb";
import { Devices } from './devices.entity'; // Importar a entidade Devices
import { UpdateResult } from 'typeorm';

describe('Unit tests of Devices Controller', () => {
    let devicesController: DevicesController;
    let devicesService: DevicesService;

    beforeEach(() => {
        devicesService = new DevicesService(null); // Mock DevicesService
        devicesController = new DevicesController(devicesService);
    });

    describe('createDevice', () => {
        it('should create a new device', async () => {
            const newDevice: CreateDeviceDTO = { model: "Model123", description: "TESTE", user_id: new ObjectId() };
            const createdDevice: Devices = { 
                _id: new ObjectId(), 
                ...newDevice, 
                registered_at: new Date(), 
                status: "done" as DeviceStatus,  // Use o valor literal para status
                value: 100 
            };
            jest.spyOn(devicesService, 'create').mockImplementation(async () => createdDevice);

            expect(await devicesController.createDevice(newDevice)).toEqual(createdDevice);
        });
    });

    describe('getAllDevices', () => {
        it('should return all devices', async () => {
            const query: GetDevicesDTO = { /* mock query params if any */ };
            const devices: Devices[] = [
                { 
                    _id: new ObjectId(), 
                    model: "Model123", 
                    description: "TESTE", 
                    user_id: new ObjectId(), 
                    registered_at: new Date(), 
                    status: "done" as DeviceStatus,  // Use o valor literal para status
                    value: 100 
                },
                // Add more mock devices as needed
            ];
            jest.spyOn(devicesService, 'getAll').mockImplementation(async () => devices);

            expect(await devicesController.getAllDevices(query)).toEqual(devices);
        });
    });

    describe('updateDeviceStatus', () => {
        it('should update the device status', async () => {
            const id = 'some-id';
            const updateData: UpdateDeviceStatusDTO = { status: "in_progress" as DeviceStatus };
            const updateResult: UpdateResult = { 
                generatedMaps: [], 
                raw: {}, 
                affected: 1 
            }; // Mock UpdateResult
            jest.spyOn(devicesService, 'updateStatus').mockImplementation(async () => updateResult);

            expect(await devicesController.updateDeviceStatus(id, updateData)).toEqual(updateResult);
        });
    });

    describe('updateDeviceSolution', () => {
        it('should update the device solution', async () => {
            const id = 'some-id';
            const updateData: UpdateDeviceSolutionDTO = { 
                solution_description: "New Solution", 
                value: 200  // Incluindo o campo obrigatório 'value'
            };
            const updateResult: UpdateResult = { 
                generatedMaps: [], 
                raw: {}, 
                affected: 1 
            }; // Mock UpdateResult
            jest.spyOn(devicesService, 'updateSolution').mockImplementation(async () => updateResult);

            expect(await devicesController.updateDeviceSolution(id, updateData)).toEqual(updateResult);
        });
    });

    describe('deleteDevice', () => {
        it('should delete the device', async () => {
            const id = 'some-id';
            const deleteResult = { message: 'Device deleted successfully' }; // Mock delete result
            jest.spyOn(devicesService, 'delete').mockImplementation(async () => deleteResult);

            expect(await devicesController.deleteDevice(id)).toEqual(deleteResult);
        });
    });
});
