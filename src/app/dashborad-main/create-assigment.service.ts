import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateAssigmentService {

  UserToken:any =  localStorage.getItem('authToken');
  Bearer:any = "Bearer"
  constructor(private http:HttpClient) {}


  getContentFiles(AssgmentID:any){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken
      // You can add other headers if needed
    });
    var req = this.http.get<any>(environment.apiBaseUrl + 'api/Teacher/Contents?AssigmentID=' + AssgmentID,{headers})
      return req


  }

  SetFileAttachment(FileName:any,AssID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = { Assigment_ID:{assiID: AssID},attachment:FileName };
     this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/AddFile', body, { headers }).subscribe((data: any) => {
        console.log(data)
     });
   }


   UploadFile(formData:any){

    return this.http.post(environment.apiBaseUrl + 'api/Teacher/FileUpload', formData)


  }


  UpdateInContent(Descrbtion:any,AssID:any){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.Bearer +  " " + this.UserToken

    };
     const body = { assiID: AssID,Descrbtion:Descrbtion };
     this.http.post<any>(environment.apiBaseUrl + 'api/Teacher/updateAssigmentiInContent', body, { headers }).subscribe((data: any) => {
        console.log(data)
     });
   }



}


