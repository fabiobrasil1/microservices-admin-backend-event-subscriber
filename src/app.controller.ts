import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  logger = new Logger(AppController.name)

  @EventPattern('criar-categoria')
  async criarCtegoria(@Payload() categoria: Categoria) {
    
    this.logger.log(`categoria: ${JSON.stringify(categoria)}`)
    
    await this.appService.criarCategoria(categoria)
  }


  @MessagePattern('consltar-categorias')
  async consultarCategorias(@Payload() _id: string){
    if(_id){
      return this.appService.consultarCategoriaPeloId(_id)
    }else{
      return this.appService.consultarTodasCategorias()
    }
  }
}
