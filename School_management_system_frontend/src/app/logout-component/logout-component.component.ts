import { Component } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent {
  constructor(private router: Router){}      // back to login routing
  OnClickLogin()
  {
    console.log("this is login page");  
    this.router.navigate (['/login']); 
  }

}
