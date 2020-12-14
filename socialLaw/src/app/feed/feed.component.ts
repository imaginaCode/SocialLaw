import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private postagemService: PostagemService,
              private temaService: TemaService,
              private alert : AlertasService) { }

  key = 'data'
  reverse = true

  postagem : PostagemModel = new PostagemModel();
  listaPostagem : PostagemModel[];
  tema: TemaModel = new TemaModel();
  listaTemas : TemaModel[];
  idTema: number;


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
    this.tema.id_tema = this.idTema;
    this.postagem.tema = this.tema

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



}
