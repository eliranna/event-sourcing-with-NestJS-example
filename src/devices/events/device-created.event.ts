import { IEvent } from '@nestjs/cqrs';
import { DeviceDto } from '../dtos/device.dto';

export class DeviceCreatedEvent implements IEvent {
  constructor(
    public readonly deviceDto: DeviceDto) {}
}
