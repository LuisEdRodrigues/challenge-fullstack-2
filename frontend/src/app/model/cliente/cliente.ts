export class Cliente {
    id: number;
    nome: String;
    email: String;
    telefone: String;
    cidade: String;
    empresa: String;
    contatado: boolean;

    constructor(
        id: number,
        nome: String,
        email: String,
        telefone: String,
        cidade: String,
        empresa: String,
        contatado: boolean
    ){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cidade = cidade;
        this.empresa = empresa;
        this.contatado = contatado;
    }


}
