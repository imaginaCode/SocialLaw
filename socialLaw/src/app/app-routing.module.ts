import { PostagemUnicaComponent } from './postagem-unica/postagem-unica.component';
import { ListaPostagemComponent } from './lista-postagem/lista-postagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LogarComponent } from './logar/logar.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "logar", component:LogarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "lista", component: ListaPostagemComponent},
  {path:"cadastro-tema", component: PostTemaComponent},
  {path:"editar-tema/:id", component: PutTemaComponent},
  {path:"delete-tema/:id", component: DeleteTemaComponent},
  {path: 'editar-post/:id', component: PutPostagemComponent}, /* AQUI */
  {path: 'delete-post/:id', component: DeletePostagemComponent},
  {path: 'post-uni/:id', component: PostagemUnicaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
