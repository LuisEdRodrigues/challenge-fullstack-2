import { Component } from '@angular/core';
import { Vendedor } from '../../model/vendedor/vendedor';
import { RegisterService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-vendedor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-vendedor.component.html',
  styleUrl: './register-vendedor.component.css'
})
export class RegisterVendedorComponent {

  model: Vendedor;

  error: string | undefined;

  constructor(private registerService: RegisterService, private router: Router){
    this.model = new Vendedor(0, '', '', '', undefined);
  }

  newVendedor(){
    const newVendedor = new Vendedor(
      0,
      this.model.nome,
      this.model.email,
      this.model.senha,
      undefined
    );


    console.log(`
      nome: ${newVendedor.nome}, 
      email: ${newVendedor.email},
      senha: ${newVendedor.senha}
    `);

    const request = JSON.stringify(this.model).replace("\"id\":0,", '');
    console.log(request);

    this.registerService.registerVendedor(this.model).subscribe({
      next: value => console.log(value),
      error: error => this.error = error,
      
    })
    
    if(this.error == undefined){
      this.router.navigate(['login']);
    }
    
    


  }

}
