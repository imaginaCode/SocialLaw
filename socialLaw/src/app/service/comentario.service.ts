import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { ComentarioModel } from '../model/ComentarioModel';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }


  getAllComentario(): Observable<ComentarioModel[]> {
    return this.http.get<ComentarioModel[]>('https://social-law.herokuapp.com/comentario', this.token)
  }

  getByIdComentario(id: number): Observable<ComentarioModel>{
    return this.http.get<ComentarioModel>(`https://social-law.herokuapp.com/comentario/${id}`, this.token);
  }

  postComentario(comentario: ComentarioModel): Observable<ComentarioModel> {
    return this.http.post<ComentarioModel>('https://social-law.herokuapp.com/comentario', comentario, this.token)
  }

  putComentario(comentario: ComentarioModel): Observable<ComentarioModel>{
    return this.http.put<ComentarioModel>('https://social-law.herokuapp.com/comentario', comentario, this.token);
  }

  deleteComentario(id: number): Observable<ComentarioModel>{
    return this.http.delete<ComentarioModel>(`https://social-law.herokuapp.com/comentario/${id}`, this.token);
  }



}
