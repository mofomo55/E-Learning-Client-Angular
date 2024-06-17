import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  RoleID:any = localStorage.getItem('RoleID');
  AllAssigments: any[]=[];
  constructor(public service:StudentService,public build:FormBuilder) {}

  StudentEnrollments:any[] = [];


  ngOnInit(): void {

    this.getEnrollmentByStudentID()
    this. GetAssigmentForCurrentTeacher()

  }


  isDateInPast(date: Date): boolean {
    const currentDate = new Date();
    const parsedDate = new Date(date);
    var IsDatePast = parsedDate < currentDate
    return IsDatePast
  }


  getEnrollmentByStudentID(){

    var RoleId = Number(this.RoleID)
    this.service.getEnrollmentForStudent(RoleId).subscribe((res:any) =>{
      this.StudentEnrollments = res
   })


  }




  GetAssigmentForCurrentTeacher(){


    this.service.GetAssigmentForStudent().subscribe((res:any) =>{
     this.AllAssigments = res
   })

  }


}
