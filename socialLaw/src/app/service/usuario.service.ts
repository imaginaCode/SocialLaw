import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getUsuarioByNome(nome: string): Observable<UsuarioModel>
  {
    return this.http.get<UsuarioModel>(`http://localhost:8080/usuarios/nome/${nome}`, this.token)

  }


  getUsuarioById(id:number): Observable<UsuarioModel>
  {
      return this.http.get<UsuarioModel>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  getUsuarioById2(usuarioLogin:UsuarioLogin): Observable<UsuarioModel>
  {
      return this.http.get<UsuarioModel>(`http://localhost:8080/usuarios/${usuarioLogin.vrf}`, this.token)
  }



}
