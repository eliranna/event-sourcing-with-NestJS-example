import { ICommand } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';

export class CreateDeviceCommand implements ICommand {
  constructor(public readonly device: DeviceDto) {}
}
