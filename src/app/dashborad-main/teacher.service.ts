import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"

   GetAllCoursesForTeacher(TeacherID:any){


    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
      const body = {TeacherID:TeacherID};
      var req = this.http.post(environment.apiBaseUrl + 'api/Teacher/Courses', body,{ headers })
      return req

   }


   GetAssigmentForTeacher(){


    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });
      var req = this.http.get(environment.apiBaseUrl + 'api/Teacher/Assigment',{headers})
      return req

   }


   GetSectionsForTeacher(){

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });

    var req = this.http.get(environment.apiBaseUrl + 'api/Teacher/Sections',{headers})
    return req

 }

 GetSubmission(){

  var headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken
    // You can add other headers if needed
  });

  var req = this.http.get(environment.apiBaseUrl + 'api/Teacher/Submission',{headers})
  return req

}




 GetGradesKey(){

  var headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken
    // You can add other headers if needed
  });

  var req = this.http.get(environment.apiBaseUrl + 'api/Teacher/GradesKeys',{headers})
  return req

}


setNewAssigment(courseID:any,title:any,StartDatee:any,EndDatee:any,Max_Grading:any,Typee:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {Course_id:{courseID:courseID} , title:title , StartDate:StartDatee, EndDate:EndDatee , Max_Grading:Max_Grading , Typee:Typee};
   this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/NewAssigment', body, { headers }).subscribe((data: any) => {
      console.log(data)
   });
 }

 setNewSection(courseID:any,title:any,Percent:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {Title:title, Course_id:{courseID:courseID}, Percent:Percent};
   this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/NewSection', body, { headers }).subscribe((data: any) => {
      console.log(data)
   });
 }


 GetAssigmentSelectList(courseID:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {Course_id:{courseID:courseID}};
   return this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/AssigmentForSelectList', body, { headers })
 }


 setNewGradeKey(SectionsID:any,assiID:any,gDate:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {Section_ID:{SectionsID:SectionsID}, Assigment_ID:{assiID:assiID}, gDate:gDate};
   this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/NewGradeKey', body, { headers }).subscribe((data: any) => {
      console.log(data)
   });
 }

}
