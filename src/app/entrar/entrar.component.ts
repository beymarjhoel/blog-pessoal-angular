import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { AuthService } from './../service/auth.service';

@Component({

  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']

})

export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()  

  constructor (
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) {
    //Resolve o problema de voltar e avançar com o navegador, zerando o token
    environment.token = ''
   }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo

      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })
  }

}
