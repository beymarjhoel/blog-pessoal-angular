import { Postagem } from "./Postagem"

export class Tema {

  public id: number
  public descricao: string 
  //Várias postagens para um tema
  public postagem: Postagem[]
  
}