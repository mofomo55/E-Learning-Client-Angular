import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NotenbuchService {
  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"
  constructor(private http:HttpClient) { }


  GetSectionsForStuddent(){

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });

    var req = this.http.get(environment.apiBaseUrl + 'api/Teacher/Sections',{headers})
    return req

 }


 GetGradesForStuddent(){


  var headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken
    // You can add other headers if needed
  });
  var req = this.http.get(environment.apiBaseUrl + 'api/Student/GradesStudent',{headers})
  return req

}







 GetSectionsByID(courseIDD:any){
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': this.Bearer +  " " + this.UserToken

  };
   const body = {Course_ID:{courseID:courseIDD}};
   return this.http.post<any>(environment.apiBaseUrl + 'api/Student/SectionsStudent', body, { headers })
 }

}
