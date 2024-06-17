import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { TeacherService } from '../teacher.service';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public service:TeacherService,public build:FormBuilder) {}
  RoleID:any = localStorage.getItem('RoleID');

  BaseUrlTeacher = environment.apiBaseUrl + "api/Teacher"
  Courses:any[] = []
  Assigments:any[][] = []
  AllAssigments:any[] = []
  Sections:any[] = []
  GradesKey:any[] = []
  Submission:any[] = []
  assigmentSelectList:any[] = []
  CourseID:any
  SectionID:any
  public AssigmentForm!:FormGroup
  public SectionForm!:FormGroup
  public GradeForm!:FormGroup
  @ViewChild('TypeDropDownList')
  TypeDropDownList!: ElementRef;
  @ViewChild('AssigmentDropDownList')
  AssigmentDropDownList!: ElementRef;
  ngOnInit(): void {

    var RoleIDD = Number(this.RoleID)

    this.GetAllCourseForCurrentTeacher(RoleIDD)
    this.GetAssigmentForCurrentTeacher()
    this.GetSectionsForCurrentTeacher()
    this.GetGreadesKeys()
    this.GetAllSubmission()
    this.AssigmentForm = this.build.group({

      Typee:['',[Validators.required]],
      Title:['',[Validators.required]],
      MaxGrade:[''],
      StartDate:['',[Validators.required]],
      EndDate:['',[Validators.required]],
    })

    this.SectionForm = this.build.group({

      Title:['',[Validators.required]],

      Percent:['',[Validators.required]],
    })

    this.GradeForm = this.build.group({
      GDate:[''],
      Assigment:['',[Validators.required]]
    })
  }




  GetAllCourseForCurrentTeacher(TeacherID:any){


    this.service.GetAllCoursesForTeacher(TeacherID).subscribe((res:any) =>{
         this.Courses = res
     },error => {
       console.log(error.messages)
     })

  }


  GetAssigmentForCurrentTeacher(){


    this.service.GetAssigmentForTeacher().subscribe((res:any) =>{
     this.AllAssigments = res
   })

  }

  GetAssigmentForSelectList(){

     this.service.GetAssigmentSelectList(this.CourseID).subscribe((res:any) =>{
      this.assigmentSelectList = res
    })


  }


  GetSectionsForCurrentTeacher(){


    this.service.GetSectionsForTeacher().subscribe((res:any) =>{

     this.Sections = res
   })

  }

  GetGreadesKeys(){


    this.service.GetGradesKey().subscribe((res:any) =>{
      this.GradesKey = res
   })

  }


  GetAllSubmission(){


    this.service.GetSubmission().subscribe((res:any) =>{
      this.Submission = res
   })

  }





  CreateAssigment(){


    window.location.href = "/Dashboard/CreateAssigment";


  }

  selectType(){

    var selectedValue = this.TypeDropDownList.nativeElement.value;
    this.AssigmentForm.get('Typee')?.setValue(selectedValue)
    console.log(this.AssigmentForm.value.Typee)
  }


  setCourseID(value: any){
     this.CourseID = value
  }

  setSectionID(Sectionvalue:any,CourseValue:any){
    this.SectionID = Sectionvalue
    this.CourseID = CourseValue
    this.GetAssigmentForSelectList()
  }

  ConfirmNewAssigment(){

    var title = this.AssigmentForm.value.Title;
    var Typee = this.AssigmentForm.value.Typee;
    var MaxGrade =Number(this.AssigmentForm.value.MaxGrade)  ;
    var StartDate = this.AssigmentForm.value.StartDate;
    var EndDate = this.AssigmentForm.value.EndDate;
    var CourseID = this.CourseID;



    this.service.setNewAssigment(CourseID,title,StartDate,EndDate,MaxGrade,Typee)
    setTimeout(() => {
       window.location.reload();
    }, 500);

  }


  ConfirmNewSection(){
    var title = this.SectionForm.value.Title;
    var Percent =Number(this.SectionForm.value.Percent)  ;
    var CourseID = this.CourseID;

    this.service.setNewSection(CourseID,title,Percent)
    setTimeout(() => {
       window.location.reload();
    }, 500);


  }

  selectAssigment(){

    var selectedValue = this.AssigmentDropDownList.nativeElement.value;
    this.GradeForm.get('Assigment')?.setValue(Number(selectedValue))
    if(this.GradeForm.value.Assigment == 0){
      this.GradeForm.get('Assigment')?.setValue('')
    }
    console.log(this.GradeForm.value.Assigment)



  }


  ConfirmNewGradeKey(){

    var SectionID = this.SectionID;
    var AssigmentID =Number(this.GradeForm.value.Assigment)  ;
    var gDate = this.GradeForm.value.GDate

    this.service.setNewGradeKey(SectionID,AssigmentID,gDate)
    setTimeout(() => {
       window.location.reload();
    }, 500);

  }

}
