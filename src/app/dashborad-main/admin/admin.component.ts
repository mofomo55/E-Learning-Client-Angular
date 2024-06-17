import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit{
  public Userform!:FormGroup
  public Adminform!:FormGroup
  public Subjectform!:FormGroup
  public Teacherform!:FormGroup
  public Studentform!:FormGroup
  public Courseform!:FormGroup
  public enrollmentform!:FormGroup


  constructor(public service:AdminService,public build:FormBuilder) {}

  Users:any[] = []
  Teachers:any[] = []
  Students:any[] = []
  Admins:any[] = []
  Courses:any[] = []
  Subjects:any[] = []
  Enro:any[] = []
  UsersForSelectAdminList:any[] = []
  UsersForSelectTeacherList:any[] = []
  UsersForSelectStudentList:any[] = []


  @ViewChild('TeacherDropDownList')
  TeacherDropDownList!: ElementRef;
  @ViewChild('UserToAdminDropDownList')
  UserToAdminDropDownList!: ElementRef;
  @ViewChild('StudentDropDownList')
  StudentDropDownList!: ElementRef;
  @ViewChild('SubjectDropDownList')
  SubjectDropDownList!: ElementRef;
  @ViewChild('TeacherinCourseDropDownList')
  TeacherinCourseDropDownList!: ElementRef;
  @ViewChild('StudentforEnroDropDownList')
  StudentforEnroDropDownList!: ElementRef;
  @ViewChild('CourseDropDownList')
  CourseDropDownList!: ElementRef;


  ngOnInit(): void {

    this.Subjectform = this.build.group({
      SubjectName:['',[Validators.required]],
      Desc:['']
    })

    this.Teacherform = this.build.group({
      UserID:['',[Validators.required]],
      Birth:['',[Validators.required]]
    })

    this.Studentform = this.build.group({
      UserID:['',[Validators.required]],
      Birth:['',[Validators.required]]
    })

    this.Adminform = this.build.group({
      UserID:['',[Validators.required]],
      Birth:['',[Validators.required]]
    })

    this.Courseform = this.build.group({
      CourseName:['',[Validators.required]],
      Sub_ID:['',[Validators.required]],
      Describtion:[''],
      Teacher_ID:['',[Validators.required]],
      instID:[''],
      StartDate:[''],
      EndDate:[''],
    })


    this.Userform = this.build.group({
      userName:['',[Validators.required]],
      firstName:[''],
      lastName:[''],
      email:['',[Validators.required]],
      picture:[''],
      password:['',[Validators.required]]
    })



    this.enrollmentform = this.build.group({
      eDate:[''],
      student_id:['',[Validators.required]],
      course_id:['',[Validators.required]]
    })



    this.GetUsers()
    this.GetTeacher()
    this.GetStudent()
    this.GetAllAdmins()
    this.GetAllCoursess()
    this.GetAllsubje()
    this.GetErnro()
    this.GetUsersForSelectList("A")
    this.GetUsersForSelectList("T")
    this.GetUsersForSelectList("S")


  }


  GetUsers(){

    this.service.GetAllUsers().subscribe((res:any) =>{
      this.Users = res
    },error => {
      console.log(error.messages)
    })

    }


    GetUsersForSelectList(Role:any){

      this.service.GetUsersForSelectList(Role).subscribe((res:any) =>{
       if(Role=="A"){
        this.UsersForSelectAdminList = res
       }else if(Role=="T"){
        this.UsersForSelectTeacherList = res
       }else if(Role=="S"){

        this.UsersForSelectStudentList = res

       }
      },error => {
        console.log(error.messages)
      })

    }





    GetTeacher(){

      this.service.GetAllTeacher().subscribe((res:any) =>{
        this.Teachers = res
      },error => {
        console.log(error.messages)
      })

    }


      GetStudent(){

        this.service.GetAllStudent().subscribe((res:any) =>{
          this.Students = res
        },error => {
          console.log(error.messages)
        })

      }



        GetAllAdmins(){

          this.service.GetAllAdmin().subscribe((res:any) =>{
            this.Admins = res
          },error => {
            console.log(error.messages)
          })

      }


          GetAllCoursess(){

            this.service.GetAllCourses().subscribe((res:any) =>{
              this.Courses = res
            },error => {
              console.log(error.messages)
            })

            }


            GetAllsubje(){

              this.service.GetAllSubjects().subscribe((res:any) =>{
                this.Subjects = res
              },error => {
                console.log(error.messages)
              })

              }


              GetErnro(){

                this.service.GetAllErno().subscribe((res:any) =>{
                  this.Enro = res
                },error => {
                  console.log(error.messages)
                })

                }


                getSelectedTecher(){
                  var selectedValue = this.TeacherDropDownList.nativeElement.value;
                  this.Teacherform.get('UserID')?.setValue(Number(selectedValue))
                  if(this.Teacherform.value.UserID == 0){
                    this.Teacherform.get('UserID')?.setValue('')
                  }
                }


                ConfirmNewTeacher(){

                  this.service.setNewTeacher(this.Teacherform.value.UserID,this.Teacherform.value.Birth)
                  setTimeout(() => {
                    window.location.reload();
                 }, 500);
                }


                getSelectedStudent(){
                  var selectedValue = this.StudentDropDownList.nativeElement.value;
                  this.Studentform.get('UserID')?.setValue(Number(selectedValue))
                  if(this.Studentform.value.UserID == 0){
                    this.Studentform.get('UserID')?.setValue('')
                  }
                  console.log(this.Studentform.value.UserID)

                }


                ConfirmNewStudent(){

                  this.service.setNewStudent(this.Studentform.value.UserID,this.Studentform.value.Birth)
                  setTimeout(() => {
                     window.location.reload();
                  }, 500);


                }


                selectedSubject(){

                  var selectedValue = this.SubjectDropDownList.nativeElement.value;
                  this.Courseform.get('Sub_ID')?.setValue(Number(selectedValue))
                  if(this.Courseform.value.Sub_ID == 0){
                    this.Courseform.get('Sub_ID')?.setValue('')
                  }
                  console.log(this.Courseform.value.Sub_ID)
                }


                selectedTeacherForCourse(){

                  var selectedValue = this.TeacherinCourseDropDownList.nativeElement.value;
                  this.Courseform.get('Teacher_ID')?.setValue(Number(selectedValue))
                  if(this.Courseform.value.Teacher_ID == 0){
                    this.Courseform.get('Teacher_ID')?.setValue('')
                  }
                  console.log(this.Courseform.value.Teacher_ID)
                }


                ConfirmNewCourse(){
                   var courseName = this.Courseform.value.CourseName;
                   var sub_ID = this.Courseform.value.Sub_ID;
                   var Describtion = this.Courseform.value.Describtion;
                   var Teacher_ID = this.Courseform.value.Teacher_ID;
                   var instID = 1
                   var StartDate = this.Courseform.value.StartDate;
                   var EndDate = this.Courseform.value.EndDate;

                  this.service.setNewCourse(courseName,sub_ID,Describtion,Teacher_ID,instID,StartDate,EndDate)
                  setTimeout(() => {
                     window.location.reload();
                  }, 500);

                }


                selectedUserToAdmin(){
                  var selectedValue = this.UserToAdminDropDownList.nativeElement.value;
                  this.Adminform.get('UserID')?.setValue(Number(selectedValue))
                  if(this.Adminform.value.UserID == 0){
                    this.Adminform.get('UserID')?.setValue('')
                  }
                  console.log(this.Adminform.value.UserID)


                }


                ConfirmNewAdmin(){

                  this.service.setNewAdmin(this.Adminform.value.UserID,this.Adminform.value.Birth)
                  setTimeout(() => {
                    window.location.reload();
                 }, 500);

                }



                SelectedStudentForEnro(){
                  var selectedValue = this.StudentforEnroDropDownList.nativeElement.value;
                  this.enrollmentform.get('student_id')?.setValue(Number(selectedValue))
                  if(this.enrollmentform.value.student_id == 0){
                    this.enrollmentform.get('student_id')?.setValue('')
                  }
                  console.log(this.enrollmentform.value.student_id)
                }



                SelectedCourse(){
                  var selectedValue = this.CourseDropDownList.nativeElement.value;
                  this.enrollmentform.get('course_id')?.setValue(Number(selectedValue))
                  if(this.enrollmentform.value.course_id == 0){
                    this.enrollmentform.get('course_id')?.setValue('')
                  }
                  console.log(this.enrollmentform.value.course_id)
                }


                onEnrollementConfirm(){

                  this.service.setNewEnrollment(this.enrollmentform.value.eDate,this.enrollmentform.value.student_id,this.enrollmentform.value.course_id)
                  setTimeout(() => {
                     window.location.reload();
                  }, 500)

                }

                ConfirmNewUser(){

                  var UserName = this.Userform.value.userName
                  var firstName = this.Userform.value.firstName
                  var lastName = this.Userform.value.lastName
                  var email = this.Userform.value.email
                  var picture = this.Userform.value.picture
                  var password = this.Userform.value.password

                  this.service.setNewUser(UserName,firstName,lastName,email,picture,password)
                  setTimeout(() => {
                    window.location.reload();
                 }, 500)

                }

                NewSubConfirm(){

                this.service.setNewSubject(this.Subjectform.value.SubjectName,this.Subjectform.value.Desc)
                setTimeout(() => {
                  window.location.reload();
               }, 500);

                }


}
