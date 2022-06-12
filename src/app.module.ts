import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import{ CategoriaEntity } from './interfaces/categorias/categoria.schema'
// import { JogadorEntity } from './interfaces/jogadores/jogador.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';


// @Module({
//   imports: [ConfigModule,AppModule],
//   controllers: [AppController],
//   providers: [AppService,
//     {
//       provide: AppService,
//       useFactory: (configService: ConfigService) => {
//         const user = configService.get('admin');
//         const password = configService.get('admin');
//         const host = configService.get('localhost');
//         const queueName = configService.get('admin-backend');
 
//         return ClientProxyFactory.create({
//           transport: Transport.RMQ,
//           options: {
//             urls: [`amqp://${user}:${password}@${host}`],
//             queue: queueName,
//             queueOptions: {
//               durable: true,
//             },
//           },
//         })
//       },
//       inject: [ConfigService],
//     }
//   ],
// })
// export class AppModule {}




// @Module({
//   imports: [
//     // TypeOrmModule.forFeature([CategoriaEntity,JogadorEntity]),
//     ClientsModule.register([
//       {
//         name: 'MATH_SERVICE',
//         transport: Transport.RMQ,
//         options: {
//           urls: ['amqp://admin:admin@localhost:5672'],
//           queue: 'admin-backend',
//           noAck: false,
//           queueOptions: {
//             durable: false
//           },
//         },
//       },
//     ]),
//   ],
//     // ConfigModule.forRoot(),
//     // TypeOrmModule.forRoot({
//     //   type: 'postgres',
//     //   host: 'localhost',
//     //   port: 5432,
//     //   username: 'postgres',
//     //   password: 'example',
//     //   database: 'microcervice_db',
//     //   // type: process.env.TYPEORM_CONNECTION,
//     //   // host: process.env.TYPEORM_HOST,
//     //   // port: process.env.TYPEORM_PORT,
//     //   // username: process.env.TYPEORM_USERNAME,
//     //   // password: process.env.TYPEORM_PASSWORD,
//     //   // database: process.env.TYPEORM_DATABASE,
//     //   entities: [__dirname + '/**/*.entity{.js,.ts}'],

//     //   // Descomentar somente em ambiente de desenvolvimento
//     //   synchronize: true,
//     // } as TypeOrmModuleOptions)
  
//   controllers: [AppController],
//   providers: [AppService],
//   // exports:[AppService]
  
  
// })
// export class AppModule {}

@Module({
  imports: [
    // // TypeOrmModule.forFeature([CategoriaEntity,JogadorEntity]),
    // ClientsModule.register([
    //   {
    //     name: 'MATH_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://admin:admin@localhost:5672'],
    //       queue: 'admin-backend',
    //       noAck: false,
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    //   },
    // ]),
  ],
    // ConfigModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'example',
    //   database: 'microcervice_db',
    //   // type: process.env.TYPEORM_CONNECTION,
    //   // host: process.env.TYPEORM_HOST,
    //   // port: process.env.TYPEORM_PORT,
    //   // username: process.env.TYPEORM_USERNAME,
    //   // password: process.env.TYPEORM_PASSWORD,
    //   // database: process.env.TYPEORM_DATABASE,
    //   entities: [__dirname + '/**/*.entity{.js,.ts}'],

    //   // Descomentar somente em ambiente de desenvolvimento
    //   synchronize: true,
    // } as TypeOrmModuleOptions)
  
  controllers: [AppController],
  providers: [AppService],
  // exports:[AppService]
  
  
})
export class AppModule {}
