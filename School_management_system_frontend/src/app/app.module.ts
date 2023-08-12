import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeacherDetailsComponent,
    LoginpageComponent,
    FooterComponentComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
