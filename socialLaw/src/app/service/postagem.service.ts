import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostagemModel } from '../model/PostagemModel';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }
  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('https://social-law.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<PostagemModel>{
    return this.http.get<PostagemModel>(`https://social-law.herokuapp.com/postagem/${id}`, this.token);
  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>('https://social-law.herokuapp.com/postagem', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel>{
    return this.http.put<PostagemModel>('https://social-law.herokuapp.com/postagem', postagem, this.token);
  }

  deletePostagem(id: number): Observable<PostagemModel>{
    return this.http.delete<PostagemModel>(`https://social-law.herokuapp.com/postagem/${id}`, this.token);
  }

  getByTituloPostagem(titulo:string): Observable<PostagemModel[]>
  {
    return this.http.get<PostagemModel[]>(`https://social-law.herokuapp.com/postagem/titulo/${titulo}`,this.token );
  }

}
