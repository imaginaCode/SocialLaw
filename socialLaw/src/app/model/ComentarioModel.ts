import { PostagemModel } from "./PostagemModel"
import { UsuarioModel } from "./UsuarioModel"

export class ComentarioModel {
    public id_comentario!: number
    public usuario!: UsuarioModel
    public postagem!: PostagemModel
    public artigo!: string
    public data!: Date
    public curtir!: string
}
