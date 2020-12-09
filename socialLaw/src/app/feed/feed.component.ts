import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private postagemService: PostagemService, private temaService: TemaService) { }

  postagem : PostagemModel = new PostagemModel();
  listaPostagem : PostagemModel[];
  tema: TemaModel = new TemaModel();
  listaTemas : TemaModel[];
  idTema: number;

  key = 'data'
  reverse = true

  ngOnInit(): void {
    window.scroll(0,0);
    this.findAllPostagens()
    this.findAllTemas()
  }


  findAllPostagens()
  {
      this.postagemService.getAllPostagens().subscribe((resp:PostagemModel[])=>{this.listaPostagem = resp})
  }

  publicar()
  {
    this.tema.Id_tema = this.idTema;
    this.postagem.tema = this.tema

    if(this.postagem.tema == null || this.postagem.titulo  == null || this.postagem.artigo == null )
    {
      alert("Preencha os campos corretamente!")
    }
    else
    {
      this.postagemService.postPostagem(this.postagem).subscribe((resp:PostagemModel)=>
      {
        this.postagem = resp;});
        /* essa linha esvazia os campos para pegar outra postagem*/
        this.postagem = new PostagemModel();
        alert("Postagem realizada!");
        this.findAllPostagens();

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



}
