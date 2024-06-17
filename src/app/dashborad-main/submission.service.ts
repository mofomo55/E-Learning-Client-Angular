import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"
  constructor(private http:HttpClient) { }


  GetAssigmentByID(AssigmentID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {assiID:AssigmentID};
     return this.http.post<any>(environment.apiBaseUrl + 'api/Student/StudentAssigment', body, { headers })
   }



   GetsubmissionAssigmentByID(AssigmentID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {assiID:AssigmentID};
     return this.http.post<any>(environment.apiBaseUrl + 'api/Student/submissioncontent', body, { headers })
   }




   GetContentAssigmentByID(AssigmentID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {assiID:AssigmentID};
     return this.http.post<any>(environment.apiBaseUrl + 'api/Student/ContentAssigment', body, { headers })
   }


   setsubmissionContent(assiID:any,attachment:any,Descrbtion:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {Assigment_ID:{assiID:assiID},attachment:attachment,Descrbtion:Descrbtion};
     this.http.post<any>(environment.apiBaseUrl + 'api/Student/NewSubmissionContent', body, { headers }).subscribe((data: any) => {
        console.log(data)
     });
   }

   UpdateSubmissionStatus(assiID:any,StatusValue:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = {Submission_Status:StatusValue,assiID:assiID};
     this.http.post<any>(environment.apiBaseUrl + 'api/Student/updateStatus', body, { headers }).subscribe((data: any) => {
        console.log(data)
     });
   }

   UploadFile(formData:any){

    return this.http.post(environment.apiBaseUrl + 'api/Student/FileUpload', formData)


  }





}
