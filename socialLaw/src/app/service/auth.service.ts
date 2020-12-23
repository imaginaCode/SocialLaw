import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private http: HttpClient) {
  }


  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }


  logar (usuarioLogin: UsuarioLogin):  Observable<UsuarioLogin> {

    localStorage.setItem('username', usuarioLogin.usuario);

    return this.http.post<UsuarioLogin>("http://localhost:8080/usuarios/logar", usuarioLogin)

  }

  getUsuarioNome(nome : string): Observable<UsuarioModel>
  {
      return this.http.get<UsuarioModel>(`http://localhost:8080/usuarios/nome/${nome}`, this.token)
  }

  getUserByUsuario(usuario : string): Observable<UsuarioModel>
  {
      return this.http.get<UsuarioModel>(`http://localhost:8080/usuarios/usuario/${usuario}`, this.token)
  }

  cadastrar(usuarioModel: UsuarioModel) : Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>("http://localhost:8080/usuarios/cadastrar", usuarioModel)
  }

  btnSair() {
    return localStorage.getItem('token') != null
  }
  btnLogin() {
    return localStorage.getItem('token') == null
  }


  getUserName(){

  let username = localStorage.getItem('username')
  if(username!= null){
  return username;}
  return '';

}




}
