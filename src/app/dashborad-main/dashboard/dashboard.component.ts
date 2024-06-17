import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponentMain implements OnInit {
  ngOnInit(): void {
    this.setUserRole()
  }
  UserRole:any = localStorage.getItem('Role');
  isAdmin:boolean = false
  isTeacher:boolean = false
  isStudent:boolean = false


  setUserRole(){

    if(this.UserRole == 'A'){

      this.isAdmin = true;

      this.isTeacher = false;

      this.isStudent = false;

    }else if(this.UserRole == 'T'){

      this.isAdmin = false;

      this.isTeacher = true;

      this.isStudent = false;

    }else if(this.UserRole == 'S'){

      this.isAdmin = false;

      this.isTeacher = false;

      this.isStudent = true;


    }

  }



}
