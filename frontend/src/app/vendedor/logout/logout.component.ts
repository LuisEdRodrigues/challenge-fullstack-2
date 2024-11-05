import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private logoutService: LogoutService, private router: Router){}
  
  ngOnInit() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  

}
