import { CommandBus, EventBus, CQRSModule } from '@nestjs/cqrs';
import { OnModuleInit, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EventStoreModule } from '../core/event-store/event-store.module';
import { EventStore } from '../core/event-store/event-store';
import { DeviceCreatedEvent } from './events/device-created.event';
import { DevicesController } from './controllers/devices.controller';
import { DevicesService } from './services/devices.service';
import { CreateDeviceHandler } from './command-handlers/create-device.handler';
import { DeviceCreatedHandler } from './event-handlers/device-created.handler';
import { DeviceRepository } from './repository/device.repository';

@Module({
  imports: [CQRSModule, EventStoreModule.forFeature()],
  controllers: [DevicesController],
  providers: [
    DevicesService,
    CreateDeviceHandler,
    DeviceCreatedHandler,
    DeviceRepository,
  ],
})
export class DevicesModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus,
    private readonly event$: EventBus,
    private readonly eventStore: EventStore,
  ) {}

  onModuleInit() {
    /*
      NestJS allows us to run custom logic on module load using the onModuleInit hook. 
      This is a chance to do general assignments, depending on our EventStore implementation, 
      such as connecting the Event Store to the Event Bus.
    */

    this.command$.setModuleRef(this.moduleRef);
    this.event$.setModuleRef(this.moduleRef);
    this.eventStore.setEventHandlers({
      UserCreatedEvent: data => new DeviceCreatedEvent(data),
    });
    this.eventStore.bridgeEventsTo((this.event$ as any).subject$);
    this.event$.publisher = this.eventStore;
    this.event$.register([DeviceCreatedHandler]);
    this.command$.register([CreateDeviceHandler]);
  }
}
