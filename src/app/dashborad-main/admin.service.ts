import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"



  constructor(private http:HttpClient) { }





  GetAllUsers(){

   var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Users',{headers})


      }

  GetAllTeacher(){

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Teacher',{headers})


      }

  GetAllStudent(){

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Student',{headers})


    }

    GetAllAdmin(){
      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken
        // You can add other headers if needed
      });


      return this.http.get(environment.apiBaseUrl + 'api/Admin/AllAdmin',{headers})


    }


    GetAllCourses(){

      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken
        // You can add other headers if needed
      });

      return this.http.get(environment.apiBaseUrl + 'api/Admin/Courses',{headers})


    }


    GetAllSubjects(){


      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken
        // You can add other headers if needed
      });
      return this.http.get(environment.apiBaseUrl + 'api/Admin/Subjects',{headers})


    }


    GetAllErno(){


      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken
        // You can add other headers if needed
      });

      return this.http.get(environment.apiBaseUrl + 'api/Admin/enrollments',{headers})


    }

    GetUsersForSelectList(Role:any){

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
      const body = {Role:Role};
      var req = this.http.post(environment.apiBaseUrl + 'api/Admin/UsersSelectList', body,{ headers })
      return req


      }

    setNewSubject(SubName:any,Descr:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
      const body = {SubjectName:SubName, Desc:Descr };
      this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewSubject', body, { headers }).subscribe((data: any) => {
         console.log(data)
      });
    }


    setNewTeacher(UID:any,Birth:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewTeacher', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }

     setNewAdmin(UID:any,Birth:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewAdmin', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }


     setNewStudent(UID:any,Birth:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {UserID:{UserID: UID}, BirthDay:Birth };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewStudent', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }


     setNewCourse(CourseName:any,SID:any,Describtion:any,TID:any,IID:any,StartDate:any,EndDate:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {CourseName:CourseName , Sub_ID:{SubID: SID} , Describtion:Describtion, Teacher_ID:{TeacherID: TID} , instID:{instID: IID} , StartDate:StartDate , EndDate:EndDate };
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewCourse', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }

     setNewEnrollment(EnroDate:any,StudentID:any,CourseID:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {eDate:EnroDate , student_id:{studentID: StudentID} , course_id:{courseID: CourseID}};
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewEnrollment', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }


     setNewUser(userName:any,firstName:any,lastName:any,email:any,picture:any,password:any){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': this.Bearer +  " " + this.UserToken

      };
       const body = {userName:userName , firstName: firstName , lastName:lastName,email:email , picture: picture , password:password};
       this.http.post<any>(environment.apiBaseUrl + 'api/Admin/NewUser', body, { headers }).subscribe((data: any) => {
          console.log(data)
       });
     }

}
