import { ComentarioModel } from './ComentarioModel'
import { TemaModel } from './TemaModel'
import { UsuarioModel } from './UsuarioModel'


export class PostagemModel {
    public id_postagem!: number
    public usuario!: UsuarioModel
    public tema!: TemaModel
    public artigo!: string
    public titulo!: string
    public data!: Date
    public comentarios!:ComentarioModel[]



}
