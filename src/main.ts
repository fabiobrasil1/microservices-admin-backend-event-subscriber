

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
 
  // const user = configService.get('admin');
  // const password = configService.get('admin');
  // const host = configService.get('localhost');
  // const queueName = configService.get('admin-backend');
 
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      // urls: ['amqp://admin:admim@localhost/smartrankink'],
      urls: ['amqp://admin:admin@localhost:5672'],
      queue: 'admin-backend',
      // noAck: true,
      queueOptions: {
        durable: true,
      },
    },
  });
 
  app.startAllMicroservices();

}
bootstrap();



// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { Logger } from '@nestjs/common';


// const logger = new Logger('Main')

// async function bootstrap() {
//     const app = await NestFactory.createMicroservice(AppModule, {
//       transport: Transport.RMQ,
//       options: {
//         urls: ['amqp://admin:admin@localhost:5672'],
//         queue: 'admin-backend',
//         // noAck: false,
//         // logger:['log', 'error', 'warn', 'debug','verbose'],
//        queueOptions: {
//          durable: false
//        }
//       },
//     });
//     await app.listen();
//   }
// bootstrap();
