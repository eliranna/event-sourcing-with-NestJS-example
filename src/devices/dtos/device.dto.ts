import { IsString } from 'class-validator';

export class DeviceDto {
  @IsString()
  readonly deviceId!: string;
}