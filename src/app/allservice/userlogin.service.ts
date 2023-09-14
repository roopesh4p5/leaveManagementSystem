import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private baseUrl = 'http://localhost:3000/employees'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  // login(loginData:any): Observable<any> {
  //  return this.http.get(this.baseUrl,loginData)
  // }
  login(username: string): Observable<any> {
    // Create a HttpParams object to set the query parameter
    const params = new HttpParams().set('username', username);
  
    // Use the params in the GET request
    return this.http.get(this.baseUrl, { params });
  
  }
}
// GET /posts?title=json-server&author=typicode