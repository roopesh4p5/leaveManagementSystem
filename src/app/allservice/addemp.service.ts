import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map, switchMap  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddempService {
  private apiUrl = 'http://localhost:3000/employees'; // Replace with your JSON server URL

  constructor(private http: HttpClient) { }

  addEmployee(employeeData: any): Observable<any> {
    // Create a new object with the "leaves" property if applicable
    const modifiedEmployeeData = { ...employeeData };
    if (employeeData.leaveType) {
      modifiedEmployeeData.leaves = {
        leaveType: employeeData.leaveType,
        startDate: employeeData.startDate,
        endDate: employeeData.endDate,
        reason: employeeData.reason,
        id: employeeData.id
      };
      delete modifiedEmployeeData.leaveType;
      delete modifiedEmployeeData.startDate;
      delete modifiedEmployeeData.endDate;
      delete modifiedEmployeeData.reason;
    }

    return this.http.post(this.apiUrl, modifiedEmployeeData);
  }


  // Retrieve employee data by ID
  getEmployeeById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  // Apply leave for a specific employee
  applyLeave(id: string, leaveData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url).pipe(
      // Process the data to add the new leave record to the existing array or initialize it
      map((employeeData: any) => {
        if (!employeeData.leave) {
          employeeData.leave = []; // Initialize the leave array if it doesn't exist
        }
        if (!Array.isArray(employeeData.leave)) {
          employeeData.leave = [employeeData.leave]; // Convert to array if it's not already
        }
        employeeData.leave.push(leaveData); // Add the new leave record
        return employeeData;
      }),
      // Send a PUT request to update the employee data with the updated leave records
      switchMap((updatedEmployeeData: any) => {
        return this.http.put(url, updatedEmployeeData);
      })
    );
}
}
