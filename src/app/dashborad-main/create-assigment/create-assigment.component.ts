import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAssigmentService } from '../create-assigment.service';

@Component({
  selector: 'app-create-assigment',
  templateUrl: './create-assigment.component.html',
  styleUrls: ['./create-assigment.component.css']
})
export class CreateAssigmentComponent implements OnInit{


  constructor(public service:CreateAssigmentService,public build:FormBuilder) {}
  selectedFile: File | null = null;
   searchParams:any = new URLSearchParams(window.location.search);
   AssigmentID:any = this.searchParams.get('AssigmentID')
   public Content!:FormGroup
  AttachFiles:any[] = []
  ngOnInit(): void {
    this.getFiles()

    this.Content = this.build.group({
      attachment:['',[Validators.required]],
      Descrbtion:['',[Validators.required]]
    })


  }



  getFiles(){

    this.service.getContentFiles(this.AssigmentID).subscribe(response => {
      this.AttachFiles = response
    });

  }


  setAttachment(){
   var FileName = this.Content.value.attachment
if(FileName != ''){

  var AssigID = Number(this.AssigmentID)

  this.service.SetFileAttachment(FileName,AssigID)

 this.uploadFile()

}

  setTimeout(() => {
    window.location.reload();
 }, 500)

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



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updatedescrbtionInContent(){
    var AssigID = Number(this.AssigmentID)
    var Descrbtion = this.Content.value.Descrbtion
    //console.log(Descrbtion)
    this.service.UpdateInContent(Descrbtion,AssigID)

  }

}
