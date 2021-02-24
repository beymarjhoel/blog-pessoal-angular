import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //eu coloquei
    window.scroll(0,0)

    //Verificação do token
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

  }

}
