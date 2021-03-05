import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
//Array de objetos de rotas
const routes: Routes = [
  //Path inicial será o 'entrar' a primeira a tela a aparecer, toda que que o path for vazio, ele será redirecionado para 'entrar', e pathMatch full para que traga TODA essa rota, porque pode trazer imparcial e etc.. é só por segurança. (toda vez que o endereço não ter nada, sem barras irá para o inicial 'entrar')
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  //Caminho para as rotas entrar e cadastrar
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'tema', component: TemaComponent },
  //Assim que se passa parametro por rota no angular
  { path: 'tema-edit/:id', component: TemaEditComponent},
  { path: 'tema-delete/:id', component: TemaDeleteComponent},

  { path: 'postagem-edit/:id', component: PostagemEditComponent},
  { path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  { path: 'user-edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
