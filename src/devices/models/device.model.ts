import { AggregateRoot } from '@nestjs/cqrs';
import { DeviceCreatedEvent } from '../events/device-created.event';

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
