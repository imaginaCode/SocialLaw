import { LogarComponent } from './../logar/logar.component';
import { ComentarioModel } from './../model/ComentarioModel';
import { ComentarioService } from './../service/comentario.service';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { AuthService } from '../service/auth.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements  OnInit {

  constructor(private postagemService: PostagemService,
              private temaService: TemaService,
              private authService: AuthService,
              private comentarioService: ComentarioService,
              private alert : AlertasService,
              private router: Router) {

}




  key = 'data'
  reverse = true

  postagem : PostagemModel = new PostagemModel();
  listaPostagem : PostagemModel[];
  listaPostagemUsuario : PostagemModel[];
  titulo:string;

  tema: TemaModel = new TemaModel();
  listaTemas : TemaModel[];
  idTema: number;
  nomeTema:string;

  user: UsuarioModel = new UsuarioModel();



  listaComentario:ComentarioModel[];
  comentario : ComentarioModel = new ComentarioModel();


  ngOnInit() {

    let token = localStorage.getItem('token')
    if(token == null)
    {
      this.router.navigate(['/logar'])
      this.alert.showAlertInfo("Faça o login para acessar o feed")
    }

    var username = this.authService.getUserName();
    window.scroll(0,0);
    this.findAllPostagens()

    this.findAllTemas()
    this.findAllComentarios()
    this.findUserUsuario(username)



  }


  findUserUsuario(user: string)
  {
    this.authService.getUserByUsuario(user).subscribe((resp:UsuarioModel)=> {
      this.user = resp
    })

  }

  findAllPostagens()
  {
      this.postagemService.getAllPostagens().subscribe((resp:PostagemModel[])=>{this.listaPostagem = resp})
  }

  findAllPostagensUsuario()
  {
    this.postagemService.getAllPostagens().subscribe((resp:PostagemModel[])=>{this.listaPostagem = resp})
    this.listaPostagem.forEach( (post) => {
      if(post.usuario.Id_usuario === this.user.Id_usuario)
      {
        this.listaPostagemUsuario.push(post)
      }
  });
  }

  publicar()
  {
    this.tema.id_tema = this.idTema;
    this.postagem.tema = this.tema;
    this.postagem.usuario = this.user;

    if(this.postagem.tema == null || this.postagem.titulo  == null || this.postagem.artigo == null )
    {
      this.alert.showAlertDanger("Preencha os campos corretamente!")
    }
    else
    {
      this.postagemService.postPostagem(this.postagem).subscribe((resp:PostagemModel)=>{this.postagem = resp
        /* essa linha esvazia os campos para pegar outra postagem*/

        this.postagem = new PostagemModel();
        this.alert.showAlertSuccess("Postagem realizada!");
        this.findAllPostagens();
      });
    }
  }

  findAllTemas()
  {
    this.temaService.getAllTemas().subscribe((resp:TemaModel[])=> {this.listaTemas = resp})
  }

  findByIdTemas()
  {
    this.temaService.getByIdTema(this.idTema).subscribe((resp:TemaModel)=> {
      this.tema = resp
    })
  }

  findByTituloPostagem()
  {
    if(this.titulo === ''){
      this.findAllPostagens();
    }
    else{
    this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp:PostagemModel[])=>{this.listaPostagem = resp});
       }
  }

  findByNomeTema()
  {
    if(this.titulo === '')
      {
        this.findAllTemas();
      } else
      {
        this.temaService.getByNomeTema(this.nomeTema).subscribe((resp:TemaModel[])=>
        {this.listaTemas = resp})
      }
  }

  findAllComentarios()
  {
      this.comentarioService.getAllComentario().subscribe((resp:ComentarioModel[])=>{this.listaComentario = resp})
  }

  publicarComentario(id: number)
  {
      this.postagemService.getByIdPostagem(id).subscribe((resp:PostagemModel)=>{this.postagem = resp})
      this.comentario.postagem = this.postagem


    if(this.comentario.artigo == null || this.comentario.postagem == null )
    {
      this.alert.showAlertDanger("Preencha os campos corretamente!")
    }
    else
    {
      this.comentarioService.postComentario(this.comentario).subscribe((resp:ComentarioModel)=>{this.comentario = resp
        /* essa linha esvazia os campos para pegar outra postagem*/
        this.comentario = new ComentarioModel();
        this.alert.showAlertSuccess("Comentario realizado!");
        this.findAllComentarios();
      });
    }
  }

}
