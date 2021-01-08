import { UsuarioModel } from './../model/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  nome:string;

  usuarioModel : UsuarioModel = new UsuarioModel();
  userExiste : UsuarioModel = new UsuarioModel()

  user: SocialUser;
  loggedIn: boolean;



  constructor(
    private authService: AuthService,
    private router: Router,
    private authSocialService: SocialAuthService
  ) { }

  ngOnInit() {

    this.authSocialService.authState.subscribe((socialUser) => {
      this.user = socialUser;
      this.loggedIn = (socialUser != null);
    });

  }

  entrar() {
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      this.setUsuario(this.usuarioLogin)
      localStorage.setItem('token', this.usuarioLogin.token)
      this.router.navigate(['/feed', { usuario: this.usuarioLogin }])


    })
  }

  setUsuario(user: UsuarioLogin)
  {
    this.usuarioLogin = user
  }

  getUsuario()
  {
    return this.usuarioLogin;
  }

  verificarUsuario(usuar : UsuarioModel): boolean
  {
      let existe = false;
      this.authService.getUserByUsuario(usuar.usuario).subscribe((resp:UsuarioModel)=> {
          this.userExiste = resp
        })


     if(this.userExiste != null)
     {
       existe = true;
       return existe;
     }
     return false;
  }


  signInWithGoogle(): void {
    this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID);
    let usuarioCadastro:UsuarioModel = new UsuarioModel();
    usuarioCadastro.nome = this.user.name;
    console.log(usuarioCadastro.nome)
    usuarioCadastro.usuario = this.user.email;
    usuarioCadastro.foto = this.user.photoUrl;
    usuarioCadastro.senha = this.user.authToken;
    this.authService.cadastrar(usuarioCadastro).subscribe((resp: UsuarioModel) => {
    this.usuarioModel = resp})
    localStorage.setItem('username', usuarioCadastro.usuario);
    localStorage.setItem('token', this.user.authToken)
    this.router.navigate(['/feed'])
  }



  signInWithFB(): void {
    this.authSocialService.signIn(FacebookLoginProvider.PROVIDER_ID);
    let usuarioCadastro:UsuarioModel = new UsuarioModel();
    usuarioCadastro.nome = this.user.name;
    console.log(usuarioCadastro.nome)
    usuarioCadastro.usuario = this.user.email;
    usuarioCadastro.foto = this.user.photoUrl;
    usuarioCadastro.senha = this.user.authToken;
    this.authService.cadastrar(usuarioCadastro).subscribe((resp: UsuarioModel) => {
    this.usuarioModel = resp})
    localStorage.setItem('username', usuarioCadastro.usuario);
    localStorage.setItem('token', this.user.authToken)
    this.router.navigate(['/feed'])
  }




}
