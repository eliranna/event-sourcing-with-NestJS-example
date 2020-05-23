import { Injectable } from '@nestjs/common';
import { DeviceDto } from '../dtos/device.dto';
import { Device } from '../models/device.model';

@Injectable()
export class DeviceRepository {
  async createDevice(deviceDto: DeviceDto) {
    const device = new Device();
    device.setData(deviceDto);
    device.create();
    return device;
  }
}