import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private baseUrl = 'http://localhost:3000/employees'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  login(loginData:any): Observable<any> {
   return this.http.get(this.baseUrl,loginData)
  }
}
// GET /posts?title=json-server&author=typicode