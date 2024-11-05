package com.luis.authlogin.controller;

import com.luis.authlogin.DTO.LoginDTO;
import com.luis.authlogin.domain.vendedor.Vendedor;
import com.luis.authlogin.repositories.VendedorRepository;
import com.luis.authlogin.security.SecurityConfig;
import com.luis.authlogin.security.SessionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth/login")
public class LoginController {


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private VendedorRepository vendedorRepository;


    @PostMapping()
    public ResponseEntity login(@RequestBody Map<String, String> request) {

        Optional<Vendedor> vendedorOptional = vendedorRepository.findByEmail(request.get("email"));

        if (vendedorOptional.isPresent()) {
            Vendedor vendedor = vendedorOptional.get();

            if (!passwordEncoder.matches(request.get("senha"), vendedor.getSenha()))
                return ResponseEntity.badRequest().body("Senha incorreta");
            else {
                String token = String.valueOf((int)(Math.random() * 100000));
                SessionContext.setContext(request.get("email"), token);
                System.out.println(token);
                return ResponseEntity.ok().body(SessionContext.getContext());
            }

        } else {
            return ResponseEntity.badRequest().body("Vendedor não encontrado");
        }

    }


}
