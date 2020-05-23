import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { DeviceCreatedEvent } from '../events/device-created.event';

@EventsHandler(DeviceCreatedEvent)
export class DeviceCreatedHandler implements IEventHandler<DeviceCreatedEvent> {
  handle(event: DeviceCreatedEvent) {
    /*
      This is were we send events to the Read Model.
      Usually, the Read Model is implemented using a denormelized datastore. 
      This can even be a completely different technology from the write side, 
      for example, a non-relational denormalized data-store built for fast text search. 
      Although CQRS does not enforce splitting the data-store itself, using 
      two different data-stores gives us the freedom of implementing a Read Data Store as denormalized data,
      allowing performant querying and higher scalability. It's also a chance to store data which makes more 
      sense as to how it should be displayed by the client.
    */
  }
}
