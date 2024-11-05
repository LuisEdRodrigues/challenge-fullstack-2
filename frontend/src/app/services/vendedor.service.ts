import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/vendedor'
  test(){
    return this.http.post(`${this.baseUrl}/teste`, {"email" : sessionStorage.getItem("email"), "token": sessionStorage.getItem("token")})
  }

  getClientes(){
    console.log(sessionStorage.getItem("token"));
    return this.http.post<any[]>(`${this.baseUrl}/getclientes`, {"email" : sessionStorage.getItem("email"), "token": sessionStorage.getItem("token")})
  }

  fazerNegocio(email: String){
    return this.http.post(`${this.baseUrl}/setcontato?clienteEmail=${email}`, {"email" : sessionStorage.getItem("email"), "token" : sessionStorage.getItem("token")})
  }

  getContatos(){
    return this.http.post<any[]>(`${this.baseUrl}/getcontatos`, {"email" : sessionStorage.getItem("email"), "token" : sessionStorage.getItem("token")})
  }

  rmContato(email: String){
    return this.http.post<any[]>(`${this.baseUrl}/rmcontato?clienteEmail=${email}`, {"email" : sessionStorage.getItem("email"), "token" : sessionStorage.getItem("token")})
  }

}
