import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/allservice/communication.service';
import { AddempService } from 'src/app/allservice/addemp.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  nameofuser: string = '';
  idofuser: string = '';
  formData: any = {};

  constructor(
    private router: Router,
    private loginStatusService: CommunicationService,
    private employeeService: AddempService // Inject the EmployeeService
  ) {}
  getMinDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit() {
    // Subscribe to user login status and user details
    this.loginStatusService.isUserLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        // If the user is logged in, fetch user details
        this.loginStatusService.username$.subscribe(name => {
          this.nameofuser = name;
        });
        this.loginStatusService.userid$.subscribe(id => {
          this.idofuser = id;
          // console.log(id);
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  submitLeaveApplication() {
    // console.log(this.formData);
    this.employeeService.applyLeave(this.idofuser, this.formData).subscribe(
      (response) => {
        alert('Leave Request Submitted')
        // console.log('Leave application submitted:', response);
      },
      (error) => {
        console.error('Error submitting leave application:', error);
      }
    );
  }
 
}
