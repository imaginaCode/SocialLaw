import { SocialAuthService } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogarComponent } from '../logar/logar.component';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-navbar-superior',
  templateUrl: './navbar-superior.component.html',
  styleUrls: ['./navbar-superior.component.css']
})
export class NavbarSuperiorComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    private authSocialService : SocialAuthService

  ) { }

  usuario: UsuarioModel = new UsuarioModel();

  ngOnInit(): void {
    var username = this.auth.getUserName();
    this.findUserUsuario(username)
  }

  sair() {
    this.router.navigate(['/logar'])
    localStorage.clear()
    this.signOut()

  }

  signOut(): void {
    this.authSocialService.signOut();
  }

  findUserUsuario(user: string)
  {
    this.auth.getUserByUsuario(user).subscribe((resp:UsuarioModel)=> {
      this.usuario = resp
    })

  }

  fotoUser():boolean
  {
    return this.usuario.foto !=null
  }

}
