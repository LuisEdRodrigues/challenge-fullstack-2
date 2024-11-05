import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Vendedor } from '../model/vendedor/vendedor';
import { catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(credentials: Object){
    const jsonString = JSON.stringify(credentials);
    const jsonCredentials = JSON.parse(jsonString);
    console.log(jsonCredentials);
    return this.http.post<LoginResponse>(this.baseUrl, jsonCredentials).pipe(
      tap((value) =>{
        sessionStorage.setItem("email", value.email),
        sessionStorage.setItem("token", value.token)
      }),
      catchError(this.handleError)
    )

  }
  
  private handleError(error: HttpErrorResponse){
    return throwError(() => new Error(error.message))
  }
}
