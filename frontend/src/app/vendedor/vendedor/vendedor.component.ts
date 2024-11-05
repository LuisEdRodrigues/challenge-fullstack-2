import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [CommonModule, AccordionModule, RouterLink],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent implements OnInit{
  constructor(private vendedorService: VendedorService){ }
  clientes: any[] = [];
  contatados: any[] = [];

  ngOnInit(){
    
    this.vendedorService.getClientes().subscribe({
      next: value => {
        this.clientes = value; 
        console.log(this.clientes);
        console.log(sessionStorage.getItem("token"));
      },
      error: error => console.log(error)
    })
    this.vendedorService.getContatos().subscribe({
      next: value => {
        console.log(value);
        this.contatados = value;
        console.log(this.contatados);
      }
    })
    
  }

  fazerNegocio(email: String){
    
    this.vendedorService.fazerNegocio(email).subscribe({
      next: value => {
        console.log(value);
        console.log(sessionStorage.getItem("token"));
        window.location.reload();
      },
      error: error => console.log(error)
    })
  }

  rmContato(email: String){
    this.vendedorService.rmContato(email).subscribe({
      next: value => {
        console.log(value);
        window.location.reload();
      },
      error: error => console.log(error)
    })
  }




}
