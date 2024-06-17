import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradingService } from '../grading.service';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit{

  constructor(public service:GradingService,public build:FormBuilder) {}
  searchParams:any = new URLSearchParams(window.location.search);
  CourseID:any = this.searchParams.get('CourseID')
  AssigmentID:any = this.searchParams.get('AssigmentID')
  SectionID:any = this.searchParams.get('SectionID')
  EnrollmentID:any
  EnrollForGrade:any[]=[]
  OneAssigment:any[]=[]
  public Gradeing!:FormGroup
  ngOnInit(): void {
 this.GetEnrollmentForGrades()
 this.GetAssigmentById()
 this.Gradeing = this.build.group({

  Score:['',[Validators.required]],

  GraDate:['',[Validators.required]],
})

  }


  GetEnrollmentForGrades(){

     var CourseID = Number(this.CourseID)
     this.service.GetEnrollmentFotGrade(CourseID).subscribe((res:any) =>{
      this.EnrollForGrade = res
  },error => {
    console.log(error.messages)
  })
  }

  GetAssigmentById(){

    var AssigmentID = Number(this.AssigmentID)
    this.service.GetAssigmentByID(AssigmentID).subscribe((res:any) =>{
     this.OneAssigment = res
 },error => {
   console.log(error.messages)
 })
 }

 ConfirmNewGrade(){

    var enrollmentID = Number(this.EnrollmentID)
    var AssigmentID = Number(this.AssigmentID)
    var Section_ID = Number(this.SectionID)
    var score = Number(this.Gradeing.value.Score)
    var gDate = this.Gradeing.value.GraDate;
    this.service.setNewGrade(AssigmentID,enrollmentID,score,gDate,Section_ID)
    setTimeout(() => {
       window.location.reload();
    }, 500);
 }

 setEnrollmentID(value:any){

  this.EnrollmentID = value

 }


}
