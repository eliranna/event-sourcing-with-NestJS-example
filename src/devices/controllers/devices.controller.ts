import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { DeviceDto } from '../dtos/users.dto';
import { UsersService } from '../services/users.service';

@Controller('devices')
@ApiUseTags('Devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @ApiOperation({ title: 'Create Device' })
  @ApiResponse({ status: 200, description: 'Create Device.' })
  @Post()
  async createUser(@Body() deviceDto: DeviceDto): Promise<DeviceDto> {
    const userId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    return this.devicesService.createDevice({...{deviceId}, ...deviceDto});
  }
}