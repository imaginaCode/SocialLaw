import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioModel } from '../model/ComentarioModel';
import { PostagemModel } from '../model/PostagemModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ComentarioService } from '../service/comentario.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem-unica',
  templateUrl: './postagem-unica.component.html',
  styleUrls: ['./postagem-unica.component.css']
})
export class PostagemUnicaComponent implements OnInit {

  constructor(private postagemService : PostagemService,
              private comentarioService : ComentarioService,
              private authService : AuthService,
              private alert : AlertasService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  postagem : PostagemModel = new PostagemModel();
  idPostagem: number;

  listaComentario:ComentarioModel[];
  comentario : ComentarioModel = new ComentarioModel();

  user: UsuarioModel = new UsuarioModel();


  ngOnInit() {

    var username = this.authService.getUserName();
    this.idPostagem = this.route.snapshot.params["id"];
    window.scroll(0,0);
    this.findAllComentarios()
    this.findUserUsuario(username)
    this.findByIdPostagem();
  }

  findByIdPostagem()
  {
    this.postagemService.getByIdPostagem(this.idPostagem).subscribe((resp:PostagemModel)=> {
      this.postagem = resp
    })
  }

  findUserUsuario(user: string)
  {
    this.authService.getUserByUsuario(user).subscribe((resp:UsuarioModel)=> {
      this.user = resp
    })

  }



  findAllComentarios()
  {
      this.comentarioService.getAllComentario().subscribe((resp:ComentarioModel[])=>{this.listaComentario = resp})
  }

  publicarComentario()
  {

    let token = localStorage.getItem('token')
    if(token == null)
    {
      this.router.navigate(['/logar'])
      this.alert.showAlertInfo("Faça o login para publicar comentários")
    }

      this.comentario.postagem = this.postagem
      this.comentario.usuario = this.user;


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

  deleteComent(id:number)
  {
    let idComent = Number(id)
    let pathId = this.idPostagem
    console.log('entrou!'+ idComent)
    this.comentarioService.deleteComentario(idComent).subscribe(()=>{
      this.alert.showAlertDanger("Comentario apagado!");
    });

  }

  verificarUser(coment: ComentarioModel):boolean
  {
    if(coment.usuario.usuario === this.user.usuario)
    {
      return true
    }
    return false
  }




}
