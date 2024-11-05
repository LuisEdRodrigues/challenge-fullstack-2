package com.luis.authlogin.controller;

import com.luis.authlogin.domain.cliente.Cliente;
import com.luis.authlogin.domain.vendedor.Vendedor;
import com.luis.authlogin.repositories.ClienteRepository;
import com.luis.authlogin.repositories.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth/signup")
public class SignupController {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private VendedorRepository vendedorRepository;

    @PostMapping("/cliente")
    public Cliente createCliente(@RequestBody Cliente cliente) {
        Optional<Cliente> clienteExistent = clienteRepository.findByEmail(cliente.getEmail());
        if(clienteExistent.isEmpty()) {
            return clienteRepository.save(cliente);
        } else {
            throw new RuntimeException("Cliente já cadastrado");
        }

    }

    @PostMapping("/vendedor")
    public Vendedor createVendedor(@RequestBody Vendedor vendedor) {
        Optional<Vendedor> vendedorExistente = vendedorRepository.findByEmail(vendedor.getEmail());
        if(vendedorExistente.isEmpty()) {
            vendedor.setSenha(passwordEncoder.encode(vendedor.getSenha()));
            return vendedorRepository.save(vendedor);
        } else {
            throw new RuntimeException("Vendedor já cadastrado");
        }

    }
}
