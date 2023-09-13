import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddempService {
  private apiUrl = 'http://localhost:3000/employees'; // Replace with your JSON server URL

  constructor(private http: HttpClient) { }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData);
  }
}
