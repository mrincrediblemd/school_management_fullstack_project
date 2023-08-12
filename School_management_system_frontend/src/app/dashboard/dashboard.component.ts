import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
      
  teacherDetail !: FormGroup;
  teacherObj : Teacher = new Teacher(); //studentObj is the object of Student Class
  teacherList : Teacher[] = [];

  constructor(private formBuilder : FormBuilder, private teacherService : TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTeacher();
    
    this.teacherDetail =new FormGroup({
      id: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      lastname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      subject: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      salary: new FormControl('',[Validators.required]),
      });
}
clickLogout()
{
  console.log("Successfully Logged out");  
  this.router.navigate (['/logout']);    
}
 // validation .....................................................
loginUser()
{
  console.warn(this.teacherDetail.value)
}
get id()
{
  return this.teacherDetail.get('id');
}
get firstname()
{
  return this.teacherDetail.get('firstname');
}
get lastname()
{
  return this.teacherDetail.get('lastname');
}
get subject()
{
  return this.teacherDetail.get('subject');
}
get salary()
{
  return this.teacherDetail.get('salary');
}
// ........................................................

  // add student
addTeacher()  {
  console.log(this.teacherDetail);
  this.teacherObj.id = this.teacherDetail.value.id;
  this.teacherObj.firstname = this.teacherDetail.value.firstname;
  this.teacherObj.lastname = this.teacherDetail.value.lastname;
  this.teacherObj.subject = this.teacherDetail.value.subject;
  this.teacherObj.salary = this.teacherDetail.value.salary;

//declaring the method and passing the teacher object
  this.teacherService.addTeacher(this.teacherObj).subscribe(res=>{
  console.log(res);
  this.getAllTeacher();
  },err=>{
  console.log(err);
  });
}

// get  all teacher
getAllTeacher() {
this.teacherService.getAllTeacher().subscribe(res=>{
   this.teacherList = res;
  },err=>{
  console.log("error while fetching data");
 });
}

// edit teacher
editTeacher(teach : Teacher)
{
   this.teacherDetail.controls['id'].setValue(teach.id);
   this.teacherDetail.controls['firstname'].setValue(teach.firstname);
   this.teacherDetail.controls['lastname'].setValue(teach.lastname);
   this.teacherDetail.controls['subject'].setValue(teach.subject);
   this.teacherDetail.controls['salary'].setValue(teach.salary);
}

// update teacher
updateTeacher(){
  this.teacherObj.id = this.teacherDetail.value.id;
  this.teacherObj.firstname = this.teacherDetail.value.firstname;
  this.teacherObj.lastname = this.teacherDetail.value.lastname;
  this.teacherObj.subject = this.teacherDetail.value.subject;
  this.teacherObj.salary = this.teacherDetail.value.salary;

  this.teacherService.updateTeacher(this.teacherObj).subscribe(res=>{
    console.log(res);
    this.getAllTeacher();
  },err=>{
    console.log(err);
  })
}

// delete student
deleteTeacher(teach : Teacher){
  this.teacherService.deleteTeacher(teach).subscribe(res=>{
    console.log(res);
    alert("Teacher Profile Deleted Successfully");
    this.getAllTeacher();
  },err=>{
    console.log(err);
  });
}

}
