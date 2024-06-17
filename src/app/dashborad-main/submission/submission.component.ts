import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  BaseUrlTeacher = environment.apiBaseUrl + "api/Teacher"
  BaseUrlStudent = environment.apiBaseUrl + "api/Student"

  searchParams:any = new URLSearchParams(window.location.search);

  AssigmentID:any = this.searchParams.get('Assigment')
  isPast:any = this.searchParams.get('IsPast')

  constructor(public service:SubmissionService,public build:FormBuilder) {}
  selectedFile: File | null = null;
  assigmentinformation:any[] = []
  submissionCntent:any[] = []
  AssigmentContent:any[] = []

  public submission!:FormGroup

  ngOnInit(): void {
    this.GetAssigmentById()
    this.GetAssigmentContentById()
    this.getSubmissionContent()
    this.submission = this.build.group({


      attachment:['',[Validators.required]],
      comment:[''],

    })
  }


  isDateInPast(date: Date): boolean {
    const currentDate = new Date();
    const parsedDate = new Date(date);
    var IsDatePast = parsedDate < currentDate
    return IsDatePast
  }





  GetAssigmentById(){

    var AssigmentID = Number(this.AssigmentID)
    this.service.GetAssigmentByID(AssigmentID).subscribe((res:any) =>{
      this.assigmentinformation = res
 },error => {
   console.log(error.messages)
 })
 }


 GetAssigmentContentById(){

  var AssigmentID = Number(this.AssigmentID)
  this.service.GetContentAssigmentByID(AssigmentID).subscribe((res:any) =>{
    this.AssigmentContent = res
},error => {
 console.log(error.messages)
})
}


setSubmissionContentt(){
  var attachment = this.selectedFile?.name
  var Descrption = this.submission.value.comment;
  var AssigmentID = Number(this.AssigmentID)
 this.service.setsubmissionContent(AssigmentID,attachment,Descrption)
 this.updateStatus('1')
 this.uploadFile()
 setTimeout(() => {
  window.location.reload();
}, 500);
}



onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

uploadFile() {
  if (this.selectedFile) {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.UploadFile(formData).subscribe(response => {
      console.log('File uploaded successfully!', response);
    });
  }
}

getSubmissionContent(){

  var AssigmentID = Number(this.AssigmentID)
this.service.GetsubmissionAssigmentByID(AssigmentID).subscribe((res:any) =>{
  this.submissionCntent = res
},error => {
console.log(error.messages)
})

}


updateStatus(StatusValue:any){

  var AssigmentID = Number(this.AssigmentID)

  this.service.UpdateSubmissionStatus(AssigmentID,StatusValue)
  setTimeout(() => {
    window.location.reload();
  }, 500);

}



}
