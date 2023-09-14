import { Component } from '@angular/core';
import { CommunicationService } from '../allservice/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nameofuser: string = '';
  idofuser: string ='';

  isAdmin=false;
  isUser=true
  islogin=false;
id: any|string;
  constructor(private router:Router, private loginStatusService:CommunicationService ) {}
  ngOnInit() {
    this.loginStatusService.isUserLoggedIn$.subscribe(isLoggedIn => {
      this.loginStatusService.username$.subscribe(name => {
        this.nameofuser = name;
        // console.log(this.nameofuser);
      });
      this.loginStatusService.userid$.subscribe(id => {
        this.idofuser = id;
        // console.log(this.nameofuser);
      });
      this.isUser = isLoggedIn;
      this.islogin = isLoggedIn;
    });
  }
  logout(){

    this.islogin=false;
    // console.log(this.islogin)
    this.isUser=false;
    this.router.navigate(['/home']);
   
  }
}
