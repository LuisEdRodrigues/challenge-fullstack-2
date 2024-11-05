import { Cliente } from "../cliente/cliente";

export class Vendedor {
    id: number;
    nome: String;
    email: String;
    senha: String;
    cliente?: Cliente;

    constructor(id: number, nome: String, email: String, senha: String, cliente?: Cliente) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cliente = cliente;
    }
}
