import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { EventStoreModule } from './core/event-store/event-store.module';

@Module({
  imports: [EventStoreModule.forRoot(), DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  async onModuleInit() {}
}
