import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemModel } from '../model/PostagemModel';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  postagem: PostagemModel = new PostagemModel();

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert : AlertasService
  ) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params['id'];
    this.findByIdPostagem(id);
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel)=>{
      this.postagem = resp;
    });
  }

  btnSim(){
    this.postagemService.deletePostagem(this.postagem.id_postagem).subscribe(()=>{
      this.router.navigate(['/feed']);
      this.alert.showAlertSuccess('Postagem apagada com sucesso!');
    });
  }
  btnNao(){
    this.router.navigate(['/feed']);
  }

}
