import { Postagem } from "./Postagem"
  //Para criar uma class
export class User {
  //Implementando os atributo da classe
  public id: number
  public nome: string
  public usuario: string
  public senha: string
  public foto: string
  public tipo: string
  public postagem: Postagem[]

}