import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';


const logger = new Logger('Main')

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.RMQ,
      options: {
        url: ['amqp://admim:admim@localhost/smartrankink'],
        queue: 'admin-backend',
        logger:['log', 'error', 'warn', 'debug','verbose']
      },
    });
    await app.listen();

    
  }
bootstrap();
