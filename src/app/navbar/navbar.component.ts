import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAdmin=false;
  isUser=true
  islogin=false;
  logout(){
    this.islogin=true;
    console.log(this.islogin)
  }
}
