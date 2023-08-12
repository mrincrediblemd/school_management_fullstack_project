import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent {
//adding login form validation 
constructor(private router: Router){}      // login routing

loginForm =new FormGroup({
Email: new FormControl('',[Validators.required, Validators.email]),
password: new FormControl('',[Validators.required, Validators.minLength(8)]),
})
loginUser()
{
  console.log("Successfully Logged in");  
  this.router.navigate (['/dashboard']);     // login routing
  console.warn(this.loginForm.value)  
}
get Email()
{
  return this.loginForm.get('Email');
}
get password()
{
  return this.loginForm.get('password');
}


}
