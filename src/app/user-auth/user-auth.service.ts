import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService  {


  constructor(private http:HttpClient) { }

    UserAuthentcation(userName:any,pass:any){

      const headers = { 'Content-Type': 'application/json' };
      const body = {userName:userName , password:pass};
       return this.http.post<any>(environment.apiBaseUrl + 'api/User/login', body, { headers })



    }





}
