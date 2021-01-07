import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { MediaService } from '../service/media.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioModel: UsuarioModel = new UsuarioModel()
  senha!: string
  imagem! : File
  imagemUser!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert : AlertasService,
    private media : MediaService

  ) { }

  ngOnInit() {
  }

  carregarImagemPreview(event: any)
  {
    this.imagem = event.target.files[0];
    let url = URL.createObjectURL(this.imagem);
    (<HTMLImageElement>document.querySelector('img#imagem-preview'))!.src = url;
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.senha === this.usuarioModel.senha && this.imagem != null ) {

      this.media.uploadPhoto(this.imagem).subscribe((resp: any)=>{
        this.imagemUser = resp.secure_url
        this.usuarioModel.foto = this.imagemUser

        this.authService.cadastrar(this.usuarioModel).subscribe((resp: UsuarioModel) => {
          this.usuarioModel = resp
          this.router.navigate(['/logar'])
          this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')

        })

      })

    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}
