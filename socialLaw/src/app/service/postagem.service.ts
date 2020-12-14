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
    return this.http.get<PostagemModel[]>('http://localhost:8080/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<PostagemModel>{
    return this.http.get<PostagemModel>(`http://localhost:8080/postagem/${id}`, this.token);
  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>('http://localhost:8080/postagem', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel>{
    return this.http.put<PostagemModel>('http://localhost:8080/postagem', postagem, this.token);
  }

  deletePostagem(id: number): Observable<PostagemModel>{
    return this.http.delete<PostagemModel>(`http://localhost:8080/postagem/${id}`, this.token);
  }

  getByTituloPostagem(titulo:string): Observable<PostagemModel[]>
  {
    return this.http.get<PostagemModel[]>(`http://localhost:8080/postagem/titulo/${titulo}`,this.token );
  }

}
