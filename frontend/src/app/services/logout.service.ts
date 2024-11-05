import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/logout';

  logout(){
    return this.http.post(this.baseUrl, {});
  }
}
