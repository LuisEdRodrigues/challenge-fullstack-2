import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente/cliente';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model: Cliente;
  error: string | undefined;
  success: string | undefined;

  constructor(private registerService: RegisterService, private router: Router,) {
    this.model = new Cliente(0, '', '', '', '', '', false);
  }

  redirectLogin(){
    this.router.navigate(["login"])
  }


  newCliente() {

    this.error = undefined;

    const newCliente = new Cliente(
      0,
      this.model.nome,
      this.model.email,
      this.model.telefone,
      this.model.cidade,
      this.model.empresa,
      false
    );

    this.registerService.registerCliente(this.model).subscribe({
      next: value => console.log(value),
      error: error => {this.error = error, this.success = undefined}
    })

    if(this.error == undefined){
      this.success = 'Cadastrado com sucesso!'
      this.error = undefined;
    }

    this.model = new Cliente(0, '', '', '', '', '', false);

  }

}
