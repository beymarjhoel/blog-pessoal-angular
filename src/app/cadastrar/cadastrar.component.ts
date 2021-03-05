import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  //Lugar onde ficam declaradas as variáveis
  //instanciamento de variavel userLogin do tipo UserLogin, java feelings, acesso aos atributos da model ex: id, nome, senha
  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    //Tudo que se coloca dentro do construtor se chama injeção de depêndencia
    private authService: AuthService,  
    private router: Router,
    private alertas: AlertasService 
  ) { }
  //Quando minha página iniciar faça, métodos
  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    //Vai receber o valor que eu selecionar
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    //Vai receber o valor que foi preenchido pelo select 
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas!')
    } else {
      //subscribe transforma de um objeto ts para um objeto JSON para que o servidor entenda a requisição
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }

}
