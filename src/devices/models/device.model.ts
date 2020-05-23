import { AggregateRoot } from '@nestjs/cqrs';
import { DeviceCreatedEvent } from '../events/device-created.event';
import { DeviceDto } from '../dtos/device.dto';

export class Device extends AggregateRoot {
  [x: string]: any;

  constructor(private readonly id?: string) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createDevice() {
    this.apply(new DeviceCreatedEvent(this.data));
  }

}