package com.luis.authlogin.DTO;

import com.luis.authlogin.domain.cliente.Cliente;
import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
public class ClienteDTO {
    private String nome;
    private String email;
    private String telefone;
    private String cidade;
    private String empresa;
    private boolean contatado;

    public ClienteDTO(Cliente cliente) {
        this.nome = cliente.getNome();
        this.email = cliente.getEmail();
        this.telefone = cliente.getTelefone();
        this.cidade = cliente.getCidade();
        this.empresa = cliente.getEmpresa();
        this.contatado = cliente.isContatado();
    }


}
