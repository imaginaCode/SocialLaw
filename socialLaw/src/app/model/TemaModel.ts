import { PostagemModel } from './PostagemModel'

export class TemaModel {
    public Id_tema!: number    
    public postagem!: PostagemModel[]
    public quantidade!: number
    public nome!: string
    public descricao!: string
}