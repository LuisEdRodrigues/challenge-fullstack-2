import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){ 
  }

  error: string | undefined;

  credentials = {email: "", senha: ""};
  
  doLogin(){
    this.loginService.login(this.credentials).subscribe({
      next: value => {console.log(sessionStorage.getItem("token")); this.router.navigate(["vendedor"]);},
      error: error => this.error = error
    });
    
  }

  navCadastrar(){
    this.router.navigate(["signup/vendedor"]);
  }


}
