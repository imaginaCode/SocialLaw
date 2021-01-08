import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


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
import { OrderModule } from 'ngx-order-pipe';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ListaPostagemComponent } from './lista-postagem/lista-postagem.component';
import { PostagemUnicaComponent } from './postagem-unica/postagem-unica.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteComentComponent } from './delete-coment/delete-coment.component';




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
    PostTemaComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    PutPostagemComponent,
    DeletePostagemComponent,
    AlertasComponent,
    ListaPostagemComponent,
    PostagemUnicaComponent,
    DeleteComentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    CoolSocialLoginButtonsModule,
    SocialLoginModule


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '59346856415-nqfrk6il9odlu1u7j4efu7kap5ikll55.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('881084955975877')
          }
        ]
      } as SocialAuthServiceConfig,
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
