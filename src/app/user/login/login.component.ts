import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/allservice/communication.service';
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
  data: any;
  username: string='';
  id:string='';
  constructor(private router: Router,private loginservice: UserloginService,private loginStatusService: CommunicationService) { }
  password:any;
  login(){
    this.password=this.newlogin.password;
    
    this.loginservice.login(this.newlogin.username).subscribe(response=>{
      // console.log(response);
      // console.log(response[0].password)
      this.data=response;
      if (this.data==''){
        alert("user doesnot exist in the database")
      }
      else{
        if(response[0].password==this.password){
          alert('login successful')
          // console.log(response[0]);
          this.username=response[0].username
          this.id=response[0].id
          this.loginStatusService.setUserLoggedInStatus(true);
          this.loginStatusService.setUsername(this.username);  
          this.loginStatusService.setUserId(this.id);  

          this.router.navigate(['/home'], { queryParams: { id: this.id } });
          
        
        }else{
         alert('wrong password')
        }
      }
    })
    this.newlogin = {
      username: '',
      password: ''
    };
  }
}