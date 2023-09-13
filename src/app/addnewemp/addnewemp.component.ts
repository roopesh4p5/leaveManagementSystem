import { Component } from '@angular/core';
import { AddempService } from '../allservice/addemp.service';

@Component({
  selector: 'app-addnewemp',
  templateUrl: './addnewemp.component.html',
  styleUrls: ['./addnewemp.component.css']
})

export class AddnewempComponent {
  newEmployee: { username: string; email: string; password: string } = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private employeeService: AddempService) { }
  addEmployee() {
      this.employeeService.addEmployee(this.newEmployee)
        .subscribe(response => {
          // Handle the response as needed, e.g., show a success message or navigate to another page.
          console.log('Employee added:', response);
        });
    
    // You can also reset the form after submission if needed.
    this.newEmployee = {
      username: '',
      email: '',
      password: ''
    };
  }
}