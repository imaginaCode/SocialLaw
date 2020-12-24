import { ComentarioModel } from './../model/ComentarioModel';
import { ComentarioService } from './../service/comentario.service';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-lista-postagem',
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css']
})
export class ListaPostagemComponent implements OnInit{
constructor(private postagemService: PostagemService,
  private temaService: TemaService,
  private comentarioService: ComentarioService,
  private alert : AlertasService,
  private router: Router) {

   }

/*Aqui são as informações da paginação*/
p : number = 1 ;
contador : number = 2;

key = 'data'
reverse = true

postagem : PostagemModel = new PostagemModel();
listaPostagem : PostagemModel[];
titulo:string;

tema: TemaModel = new TemaModel();
listaTemas : TemaModel[];
idTema: number;
nomeTema:string;

usuarioLogin: UsuarioLogin

listaComentario:ComentarioModel[];
comentario : ComentarioModel = new ComentarioModel();


ngOnInit(): void {
window.scroll(0,0);
this.findAllPostagens()
this.findAllTemas()



}


findAllPostagens()
{
this.postagemService.getAllPostagens().subscribe((resp:PostagemModel[])=>{this.listaPostagem = resp})
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





}
