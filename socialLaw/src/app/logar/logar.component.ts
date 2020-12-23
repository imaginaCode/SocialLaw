import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  nome:string;




  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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

}
