import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LogarComponent } from './logar/logar.component';


const routes: Routes = [
  {path: "", redirectTo: "home,", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "logar", component:LogarComponent},
  {path: "cadastrar", component: CadastrarComponent}

=======
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'feed', component: FeedComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
>>>>>>> c2ee2461e7912adc21a38fe5b95f8939778ca7c1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
