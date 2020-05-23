import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';
import { CreateDeviceCommand } from '../commands/create-device.command';

@Injectable()
export class DevicesService {
  constructor(private readonly commandBus: CommandBus) {}

  async createDevice(device: DeviceDto) {
    return await this.commandBus.execute(new CreateDeviceCommand(device));
  }
}
