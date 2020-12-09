import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { NavbarSuperiorComponent } from './navbar-superior/navbar-superior.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostTemaComponent } from './post-tema/post-tema.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarLateralComponent,
    NavbarSuperiorComponent,
    FooterComponent,
    HomeComponent,
    FeedComponent,
    PesquisarComponent,
    LogarComponent,
    CadastrarComponent,
    PostTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
