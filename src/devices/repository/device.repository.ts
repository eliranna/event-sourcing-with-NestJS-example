import { Injectable } from '@nestjs/common';
import { DeviceDto } from '../dtos/device.dto';
import { Device } from '../models/device.model';

@Injectable()
export class DeviceRepository {
  _generateId() {
    // Its just a simplefication. Here we should fetch the next avaliable Id from a datastore.
    return `${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
  }

  async createDevice(deviceDto: DeviceDto) {
    const device = new Device(this._generateId());
    device.setData(deviceDto);
    device.create();
    return device;
  }
}
