import { Component } from '@angular/core';
import { UserloginService } from 'src/app/allservice/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newlogin:{username:string;password:string}={
    username: '',
    password: ''
  }
  constructor(private loginservice: UserloginService) { }

  login(){
    this.loginservice.login(this.newlogin).subscribe(response=>{
      console.log(response);
    })
    this.newlogin = {
      username: '',
      password: ''
    };
  }
}