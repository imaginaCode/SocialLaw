import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LogarComponent } from './logar/logar.component';
import { PostTemaComponent } from './post-tema/post-tema.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "logar", component:LogarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path:"cadastro-tema", component: PostTemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
