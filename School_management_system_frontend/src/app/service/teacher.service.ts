import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/teacher';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherDetail(stud: Teacher) {
    throw new Error('Method not implemented.');
  }
  getTeacherById(id: number) {
    throw new Error('Method not implemented.');
  }
  
 addTeacherURL : string;
 getTeacherURL : string;
 updateTeacherURL : string;
 deleteTeacherURL : string;
//  getStudentDetailsURL : string; 

  constructor(private http : HttpClient) { 
    this.addTeacherURL = 'http://localhost:8082/teach/addTeacher';
    this.getTeacherURL = 'http://localhost:8082/teach/teachers';
    this.updateTeacherURL = 'http://localhost:8082/teach/updateTeacher';
    this.deleteTeacherURL = 'http://localhost:8082/teach/deleteTeacherById';
    // this.getTeacherDetailsURL = 'http://localhost:9090/teach/getTeacherByID'; 
  }
  // add teacher
   addTeacher(teach : Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.addTeacherURL,teach);
  }

  // get teacher
  getAllTeacher(): Observable<Teacher[]> {
   return this.http.get<Teacher[]>(this.getTeacherURL);
  }

// update teacher
 updateTeacher(teach : Teacher): Observable<Teacher> {
  return this.http.put<Teacher>(this.updateTeacherURL, teach);
}

// delete teacher
 deleteTeacher(teach : Teacher): Observable<Teacher> {
  return this.http.delete<Teacher>(this.deleteTeacherURL+ '/'+ teach.id);
}

}
