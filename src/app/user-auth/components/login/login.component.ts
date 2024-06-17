import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public service:UserAuthService,public build:FormBuilder, private router:Router) {}
   storedToken = localStorage.getItem('authToken');
  public LoginForm!:FormGroup
  UserLoggeinInfo:any

  ngOnInit(): void {

    if(this.storedToken){

      this.router.navigate(['/Dashboard'])


    }

    this.LoginForm = this.build.group({

      UseeName:['',[Validators.required]],

      Password:['',[Validators.required]],
    })


  }

  userLogin(){

    var User = this.LoginForm.value.UseeName;
    var Pass = this.LoginForm.value.Password;
    this.service.UserAuthentcation(User,Pass).subscribe((res:any) =>{
        this.UserLoggeinInfo = res
    })


  }

  LoginConfirm(){

    this.userLogin()
    setTimeout(() => {
      this.setUserToken()
   }, 500);
   setTimeout(() => {
    window.location.reload();
 }, 500);

  }


   setUserToken(){
     if(this.UserLoggeinInfo != null || this.UserLoggeinInfo != '' || this.UserLoggeinInfo != undefined){
      var GetToken = this.UserLoggeinInfo['token']
      var UserName = this.UserLoggeinInfo['userName']
      var Role = this.UserLoggeinInfo['role']
      var RoleID = this.UserLoggeinInfo['roleID']
     }
     var userToken = GetToken
      if(this.storedToken === null || this.storedToken === ''){
       localStorage.setItem('authToken', userToken);
       localStorage.setItem('UserName', UserName);
       localStorage.setItem('Role', Role);
       localStorage.setItem('RoleID', RoleID);
      }
     console.log(GetToken)
   }



}
