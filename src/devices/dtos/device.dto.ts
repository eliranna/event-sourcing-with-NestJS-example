import { IsString } from 'class-validator';

export class DeviceId {
  @IsString()
  readonly deviceId!: string;
}

export class DeviceDto {
  @IsString()
  readonly deviceId!: string;
}