import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{ CategoriaSchema } from './interfaces/categorias/categoria.schema'
import { JogadorSchema } from './interfaces/jogadores/jogador.schema';

@Module({
  imports: [
    
    
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'microcervice_db',
      // type: process.env.TYPEORM_CONNECTION,
      // host: process.env.TYPEORM_HOST,
      // port: process.env.TYPEORM_PORT,
      // username: process.env.TYPEORM_USERNAME,
      // password: process.env.TYPEORM_PASSWORD,
      // database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],

      // Descomentar somente em ambiente de desenvolvimento
      synchronize: true,
    } as TypeOrmModuleOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
  
  
})
export class AppModule {}
