import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Categoria } from './interfaces/categorias/categoria.interface';
import { Jogador } from './interfaces/jogadores/jogador.interface';

@Injectable()
export class AppService {
  constructor(
    // @Inject('MATH_SERVICE') private client: ClientProxy
    // @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>,
    // @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>,
  ) { }

  private readonly logger = new Logger(AppService.name)

  async criarCategoria(categoria: any): Promise<any> {
    try {
      // JSON.stringify(categoria)
      console.log(categoria)
      // const categoriaCriada = new this.categoriaModel(categoria)
      // return 
      return categoria

    } catch (error) {
      this.logger.error(`error:${JSON.stringify(error.message)}`)
      throw new RpcException(error.message)
    }
  }

  // // async consultarTodasCategorias(): Promise<Categoria[]>{
  // async consultarTodasCategorias(): Promise<any>{
  //   try{
  //     return await this.categoriaModel.find().exec()
  //   }catch(error){
  //     this.logger.error(`error: ${JSON.stringify(error.message)}`)
  //     throw new RpcException(error.message)
  //   }
  // }

  // async consultarCategoriaPeloId(_id:string): Promise<Categoria>{
  //   try{
  //     return await this.categoriaModel.findOne({_id}).exec()
  //   }catch(error){
  //     this. logger.error(`error: ${JSON.stringify(error.message)}`)
  //     throw new RpcException(error.message)
  //   }
  // }

}
