import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalholidaysService {
  private apiUrl ='http://localhost:3000/nationalholiday';
  constructor(private http:HttpClient) { }
  getNationalHolidays(year: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  }
}
