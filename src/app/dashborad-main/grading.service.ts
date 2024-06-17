import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GradingService {

  constructor(private http:HttpClient) { }
  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"
  GetEnrollmentFotGrade(courseID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {Course_id:{courseID:courseID}};
     return this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/enrollmentForGrade', body, { headers })
   }

   GetAssigmentByID(AssigmentID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {assiID:AssigmentID};
     return this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/AssigmentById', body, { headers })
   }

   setNewGrade(Assigment_ID:any,enrollment_ID:any,Score:any,gradDate:any,Section_ID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {Assigment_ID:{assiID:Assigment_ID},enrollment_ID:{EnrollmentsID:enrollment_ID},Score:Score,gradDate:gradDate,Section_ID:{SectionsID:Section_ID}};
      this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/NewGrade', body, { headers }).subscribe((data: any) => {
        console.log(data)
     });
   }

}
