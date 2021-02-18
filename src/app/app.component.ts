import { Component } from '@angular/core';
//É um class decorator que pertence ao NgModule, o qual torna a classe um componente.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olá mundo';
}
