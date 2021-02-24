//Aqui ficam todos os modulos
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Aqui ficam todos os componentes 
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  //Declaração dos componentes
  declarations: [
    //Componente Padrão
    AppComponent,
    //Componentes criados
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    //Ajuda o angular a não se perder nas rotas, ex: ancoragem
    provide: LocationStrategy,
    useClass: HashLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
