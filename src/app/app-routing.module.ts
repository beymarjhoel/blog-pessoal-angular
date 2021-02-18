import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
//Array de objetos de rotas
const routes: Routes = [
  //Path inicial será o 'entrar' a primeira a tela a aparecer, toda que que o path for vazio, ele será redirecionado para 'entrar', e pathMatch full para que traga TODA essa rota, porque pode trazer imparcial e etc.. é só por segurança. (toda vez que o endereço não ter nada, sem barras irá para o inicial 'entrar')
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  //Caminho para as rotas entrar e cadastrar
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
