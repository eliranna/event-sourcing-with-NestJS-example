import { CommandBus, EventBus, CQRSModule } from '@nestjs/cqrs';
import { OnModuleInit, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EventStoreModule } from '../core/event-store/event-store.module'

@Module({
  imports: [
    CQRSModule,
    EventStoreModule.forFeature(),
  ],
})
export class DevicesModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus,
    private readonly event$: EventBus
  ) {}

  onModuleInit() {}


}