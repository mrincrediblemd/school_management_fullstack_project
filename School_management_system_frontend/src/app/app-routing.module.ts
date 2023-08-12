import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component'; 
import { LogoutComponentComponent } from './logout-component/logout-component.component';

 const routes: Routes = [
  {
    path: '' ,
    redirectTo: 'login' , pathMatch: 'full'
  },
  {
    path: 'login' ,
    component: LoginpageComponent
  },
  {
    path: 'dashboard' ,
    component: DashboardComponent,
  },  
  {
    path: 'logout' ,
    component: LogoutComponentComponent,    //to connect logout to log in
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
