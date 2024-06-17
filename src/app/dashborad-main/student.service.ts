import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"

   getEnrollmentForStudent(StudentID:any){

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
    const body = {Student_id:{StudentID:StudentID}};
    return this.http.post<any>(environment.apiBaseUrl + 'api/Student/enrollmentForStudent', body, { headers })


   }


   GetAssigmentForStudent(){


    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });
    var req = this.http.get(environment.apiBaseUrl + 'api/Student/Assigment',{headers})
    return req

 }



 GetsubmissionAssigmentByID(AssigmentID:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {assiID:AssigmentID};
   return this.http.post<any>(environment.apiBaseUrl + 'api/Student/submissioncontent', body, { headers })
 }


}
