import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { DeviceDto } from '../dtos/device.dto';
import { DevicesService } from '../services/devices.service';

@Controller('devices')
@ApiUseTags('Devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @ApiOperation({ title: 'Create Device' })
  @ApiResponse({ status: 200, description: 'Create Device.' })
  @Post()
  async createDevice(@Body() deviceDto: DeviceDto): Promise<DeviceDto> {
    return this.devicesService.createDevice({ ...deviceDto });
  }
}
