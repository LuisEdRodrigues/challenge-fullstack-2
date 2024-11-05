package com.luis.authlogin.repositories;

import com.luis.authlogin.domain.cliente.Cliente;
import com.luis.authlogin.domain.vendedor.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VendedorRepository extends JpaRepository<Vendedor, Long> {

    Optional<Vendedor> findByEmail(String email);
}
