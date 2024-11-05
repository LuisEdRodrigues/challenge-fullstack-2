package com.luis.authlogin.controller;

import com.luis.authlogin.DTO.ClienteDTO;
import com.luis.authlogin.DTO.LoginDTO;
import com.luis.authlogin.domain.cliente.Cliente;
import com.luis.authlogin.domain.vendedor.Vendedor;
import com.luis.authlogin.repositories.ClienteRepository;
import com.luis.authlogin.repositories.VendedorRepository;
import com.luis.authlogin.security.SessionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private VendedorRepository vendedorRepository;

    @PostMapping("teste")
    public Vendedor getVendedor(@RequestBody LoginDTO login) {
        if(login.token() == null || !login.token().equals(SessionContext.getToken())) return null;
        return vendedorRepository.findByEmail(login.email())
                .orElseThrow(() -> new RuntimeException("Erro ao obter vendedor"));
    }

    @PostMapping("rmcontato")
    public ResponseEntity<?> rmContato(@RequestParam String clienteEmail, @RequestBody LoginDTO login) {
        if(login.token() == null || !login.token().equals(SessionContext.getToken()))
            return ResponseEntity.badRequest().body("Não Autorizado");
        Cliente cliente = clienteRepository.findByEmail(clienteEmail).orElse(null);

        if(cliente == null)
            return ResponseEntity.badRequest().body("Cliente não encontrado");
        Vendedor vendedor = vendedorRepository.findByEmail(login.email()).orElse(null);

        if(vendedor == null)
            return ResponseEntity.badRequest().body("Vendedor não encontrado");

        vendedor.getClientes().remove(cliente);
        cliente.setVendedor(null);

        cliente.setContatado(false);

        vendedorRepository.save(vendedor);
        clienteRepository.save(cliente);
        return ResponseEntity.ok().body(vendedor);

    }


    @PostMapping("setcontato")
    public List<Cliente> setContato(@RequestParam String clienteEmail, @RequestBody LoginDTO login) {
        if(login.token() == null || !login.token().equals(SessionContext.getToken())) throw new RuntimeException("Não autorizado");
        Vendedor vendedor = vendedorRepository.findByEmail(login.email()).
                orElseThrow(() -> new RuntimeException("Vendedor não encontrado"));

        Cliente cliente = clienteRepository.findByEmail(clienteEmail)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        if(!vendedor.getClientes().contains(cliente)) {
            cliente.setVendedor(vendedor);
            vendedor.addCliente(cliente);
            System.out.println(vendedor.getClientes());
        }

        cliente.setContatado(true);

        clienteRepository.save(cliente);
        vendedorRepository.save(vendedor);

        return vendedor.getClientes();

    }

    @PostMapping("getcontatos")
    public List<ClienteDTO> getContato(@RequestBody LoginDTO login){
        if(login.token() == null || !login.token().equals(SessionContext.getToken())) throw new RuntimeException("Não autorizado");
        Vendedor vendedor = vendedorRepository.findByEmail(SessionContext.getEmail()).
                orElseThrow(() -> new RuntimeException("Vendedor não encontrado"));
        System.out.println(vendedor.getClientes().stream()
                .map(ClienteDTO::new)
                .collect(Collectors.toList()));
        return vendedor.getClientes().stream()
                .map(ClienteDTO::new)
                .collect(Collectors.toList());
    }

    @PostMapping("getclientes")
    public List<ClienteDTO> getClientes(@RequestBody LoginDTO login) {
        if(login.token() == null || !login.token().equals(SessionContext.getToken())) throw new RuntimeException("Não autorizado");
        return clienteRepository.findAll().stream()
                .map(ClienteDTO::new)
                .collect(Collectors.toList());
    }
}
