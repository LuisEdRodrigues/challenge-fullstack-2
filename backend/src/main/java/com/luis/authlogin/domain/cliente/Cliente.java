package com.luis.authlogin.domain.cliente;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.luis.authlogin.domain.vendedor.Vendedor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "clientes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nome;
    private String email;
    private String telefone;
    private String cidade;
    private String empresa;
    private boolean contatado;



    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "vendedor_id")
    private Vendedor vendedor;

}
