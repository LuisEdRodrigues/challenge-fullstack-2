import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente/cliente';
import { Vendedor } from '../model/vendedor/vendedor';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://localhost:8080/auth/signup';

  constructor(private http: HttpClient) { }

  test(){
    return this.http.get(`${this.baseUrl}/test`, {responseType: 'text'});
  }

  registerCliente(cliente: Cliente){

    const request = JSON.stringify(cliente).replace("\"id\":0,", '');
    const jsonRequest = JSON.parse(request);
    console.log(jsonRequest);
    return this.http.post<JSON>(`${this.baseUrl}/cliente`, jsonRequest).pipe(
      catchError(this.handleError)
    );
  }

  registerVendedor(vendedor: Vendedor){
    const request = JSON.stringify(vendedor).replace("\"id\":0,", '');
    const jsonRequest = JSON.parse(request);
    console.log(jsonRequest)
    return this.http.post<JSON>(`${this.baseUrl}/vendedor`, jsonRequest).pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error(error.message))
  }

}
