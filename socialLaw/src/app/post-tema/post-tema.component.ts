import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemaModel } from '../model/TemaModel';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: TemaModel = new TemaModel()
  listaTemas!: TemaModel[]
  idTema: number;

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllTemas()

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

  cadastrar(){
    if (this.tema.descricao == null) {
    alert('Preencha o campo de nome do tema corretamente')
    } else {
     this.temaService.postTema(this.tema).subscribe((resp: TemaModel) => {
       this.tema = resp
       this.router.navigate(['/feed'])
       alert('Tema cadastrado com sucesso!')
     })
    }
  }


}
