import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateDeviceCommand } from '../commands/create-device.command';
import { DeviceRepository } from '../repository/device.repository';

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceHandler
  implements ICommandHandler<CreateDeviceCommand> {
  constructor(
    private readonly repository: DeviceRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateDeviceCommand, resolve: (value?) => void) {
    const device = this.publisher.mergeObjectContext(
      await this.repository.createDevice(command.device),
    );
    device.commit();
    resolve();
  }
}