import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
@Injectable({
  providedIn: 'root'
})
export class DashboardAdminService {

  constructor(private http:HttpClient) { }


  GetAllUsers(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Users')


      }

  GetAllTeacher(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Teacher')


      }

  GetAllStudent(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Student')


    }

    GetAllAdmin(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/AllAdmin')


    }


    GetAllCourses(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Courses')


    }


    GetAllSubjects(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Subjects')


    }


    GetAllErno(){

      return this.http.get(environment.apiBaseUrl + 'api/Admin/enrollments')


    }

    GetUsersForSelectList(Role:any){

      const headers = { 'Content-Type': 'application/json' };
      const body = {Role:Role};
      var req = this.http.post(environment.apiBaseUrl + 'api/Admin/UsersSelectList', body,{ headers })
      return req


      }

    setNewSubject(SubName:any,Descr:any){
     // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

      const headers = { 'Content-Type': 'application/json' };
      const body = {SubjectName:SubName, Desc:Descr };
      this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewSubject', body, { headers }).subscribe(data => {
         console.log(data)
      });
    }


    setNewTeacher(UID:any,Birth:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewTeacher', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }

     setNewAdmin(UID:any,Birth:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewAdmin', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }


     setNewStudent(UID:any,Birth:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewStudent', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }


     setNewCourse(CourseName:any,SID:any,Describtion:any,TID:any,IID:any,StartDate:any,EndDate:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {CourseName:CourseName , Sub_ID:{SubID: SID} , Describtion:Describtion, Teacher_ID:{TeacherID: TID} , instID:{instID: IID} , StartDate:StartDate , EndDate:EndDate };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewCourse', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }

     setNewEnrollment(EnroDate:any,StudentID:any,CourseID:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {eDate:EnroDate , student_id:{studentID: StudentID} , course_id:{courseID: CourseID}};
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewEnrollment', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }


     setNewUser(userName:any,firstName:any,lastName:any,email:any,picture:any,password:any){
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

       const headers = { 'Content-Type': 'application/json' };
       const body = {userName:userName , firstName: firstName , lastName:lastName,email:email , picture: picture , password:password};
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewUser', body, { headers }).subscribe(data => {
          console.log(data)
       });
     }



}
