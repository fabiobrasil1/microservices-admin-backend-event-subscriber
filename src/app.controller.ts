import { Body, Controller, Get, Logger } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  logger = new Logger(AppController.name)

  @EventPattern('criar-categoria')
  async criarCategoria(@Body() categoria: any) {
    console.log(categoria)
    let log = this.logger.log(`categoria: ${JSON.stringify(categoria)}`)
    console.log(log)
    return categoria
    // await this.appService.criarCategoria(categoria)
  }


  // @MessagePattern('consultar-categorias')
  @MessagePattern('consultar-categorias' )
  async consultarCategorias(@Payload() data: any): Promise<any> {

    this.logger.log(JSON.stringify(data))

 
    // await this.appService.criarCategoria(data)
    console.log(data)
    return data
    // if(_id){
    //   return this.appService.consultarCategoriaPeloId(_id)
    // }else{
    //   return this.appService.consultarTodasCategorias()
    // }
  }
}
