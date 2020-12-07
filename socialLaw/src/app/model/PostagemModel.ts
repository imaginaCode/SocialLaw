import { ComentarioModel } from './ComentarioModel'


export class PostagemModel {
    public Id_postagem!: number
    public usuario!: string
    public tema!: string
    public texto!: string
    public data!: Date    
    public comentarios!:ComentarioModel[]
    


}