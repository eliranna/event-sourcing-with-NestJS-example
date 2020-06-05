This is a sample code created for [this blog post].

[this blog post]: https://thehardcoded.blog/event-sourcing-with-nestjs

# Description

In this example, we outline the Write Model of an event-sourced IoT platform. We use Event-sourcing as our data-persistence pattern, and separate the Read-Model from the Write-Model using the CQRS pattern, while also applying Domain-Driven Development principles.

### Scope
This sample only includes the functionality needed for connecting a new device to the platform. 

### Stack
We use **Node.js**, **NestJS** and **TypeScript**. The Event Store implementation is based on the one from [eventstore.org]. 

[eventstore.org]: https://eventstore.org/

### Data-flow
As a new **Command** arrives from a device, it is received by a **Command Handler**, which validates it and triggers a change in the **Domain Model**. This change is being reflected by the creation of a corresponding **Event**, which, in turn, is being stored in the **Event-Store**. The Event Store acts as a messaging bus, as it propagates the Event to the **Read Model**. Then, the propagated Event is being picked-up by various subscribers, which propagates it further to a **denormalized data-store**.



# Running the app

```bash
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
