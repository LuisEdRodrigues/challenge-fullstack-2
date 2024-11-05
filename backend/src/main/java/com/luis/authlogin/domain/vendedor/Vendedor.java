package com.luis.authlogin.domain.vendedor;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.luis.authlogin.domain.cliente.Cliente;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name = "vendedores")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nome;
    private String email;
    private String senha;

    @JsonManagedReference
    @OneToMany(mappedBy = "vendedor")
    private List<Cliente> clientes;

    public void addCliente(Cliente cliente) {
        this.clientes.add(cliente);
    }


}
