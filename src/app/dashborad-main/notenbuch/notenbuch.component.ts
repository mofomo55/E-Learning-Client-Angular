import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotenbuchService } from '../notenbuch.service';

@Component({
  selector: 'app-notenbuch',
  templateUrl: './notenbuch.component.html',
  styleUrls: ['./notenbuch.component.css']
})
export class NotenbuchComponent implements OnInit{
  Sections: any[]=[];
  GradesBook: any[]=[];
  endTotla: any[]=[];
  AddResult:any[]= [];
  sectionPercentResult:any[]=[]
  endScoreForSectionA:any[]=[]
  constructor(public service:NotenbuchService,public build:FormBuilder) {}

  searchParams:any = new URLSearchParams(window.location.search);

  CourseID:any = this.searchParams.get('CourseID')

  ngOnInit(): void {
   this.DetSectionsByID()
   this.GetGradeForStudent()
   setTimeout(() => {
    this.CalculateTheScore()
 }, 500);

  }

DetSectionsByID(){
  var CourseID = Number(this.CourseID)
  this.service.GetSectionsByID(CourseID).subscribe((res:any) =>{

    this.Sections = res
  })

}


CalculateTheScore(){


  var SectionPercent = 0
 var endScroeForSection = 0
  var SectionMaxPercent = 0
  var checktheSection:any[]=[]
  var sectionNumber =0
   if(this.GradesBook.length > 0){

    for(var counter=0;counter< this.GradesBook.length;counter++){
      var checker = 0
      var totalScore = 0
      var TotalMaxGrade = 0
          sectionNumber = this.GradesBook[counter].section_ID.sectionsID
          SectionMaxPercent = this.GradesBook[counter].section_ID.percent
        for(var contain=0;contain <= checktheSection.length;contain++){

             if(checktheSection[contain] === sectionNumber){

                  checker++

             }

        }
           if(checker == 0){

             for(var subcont=0;subcont < this.GradesBook.length;subcont++){
                 if(this.GradesBook[subcont].section_ID.sectionsID === sectionNumber){

                  totalScore += this.GradesBook[subcont].grade_ID.score

                   TotalMaxGrade += this.GradesBook[subcont].assigment_ID.max_Grading

                 }


             }

             checktheSection.push(sectionNumber)
             this.AddResult.push({sectionID:sectionNumber,TotalMaxGrade:TotalMaxGrade,totalScore:totalScore})

             SectionPercent = this.percentCalculateForGrade(TotalMaxGrade,totalScore)

             this.sectionPercentResult.push({sectionID:sectionNumber,PercentResult:SectionPercent})

             endScroeForSection = this.endScoreCalculate(SectionMaxPercent,SectionPercent)
             this.endScoreForSectionA.push({SectionID:sectionNumber,endScoreForSection:endScroeForSection})
           }


    }


      console.log(this.endScoreForSectionA)

   }




}




CalcutTheMaxScore(section:any,sectionPercent:any){
var total = 0

const threshold = section; // The threshold for filtering

const filteredItems = this.GradesBook.filter(item => item.section_ID.sectionsID == threshold);
filteredItems.forEach(item => {

  var num = Number(item.assigment_ID.max_Grading)
  total += num;
});
//console.log(total)
return total
}


CalcutTheStudentScore(section:any,sectionPercent:any){
  var total = 0

  const threshold = section; // The threshold for filtering

  const filteredItems = this.GradesBook.filter(item => item.section_ID.sectionsID == threshold);
  filteredItems.forEach(item => {

    var num = Number(item.grade_ID.score)
    total += num;
  });
 //console.log(total)
  return total
  }



  percentCalculateForGrade(MaxScore:any,StudentScore:any){

    var grade = 0
   var percent = StudentScore * 100 / MaxScore
   if(percent > 91 &&  percent < 100){
     grade = 1
   }else if(percent > 81 &&  percent < 91){
     grade = 2
   }else if(percent > 61 &&  percent < 81){
     grade = 3
   }else if(percent > 51 &&  percent < 61){
     grade = 4
   }else{
     grade = 5
   }
     return grade;
   }




  percentCalculateForSection(MaxScore:any,StudentScore:any,sectionPercent:any){
   var test:any[]=[]
   var grade = 0
  var percent = StudentScore * 100 / MaxScore


  if(percent > 91 &&  percent < 100){
    grade = 1
  }else if(percent > 81 &&  percent < 91){
    grade = 2
  }else if(percent > 61 &&  percent < 81){
    grade = 3
  }else if(percent > 51 &&  percent < 61){
    grade = 4
  }else{
    grade = 5
  }
    if(this.isNumber(percent)){
     var endSectionGrade = this.endScoreCalculate(sectionPercent,percent);
     this.AddResult.push(endSectionGrade)
    }

    console.log(this.AddResult)
    return grade;
  }






   isNumber(value:any) {
    return typeof value === 'number';
  }






  endScoreCalculate(sectionPercent:any,SectionScore:any){

     return  SectionScore * sectionPercent / 100
  }


GetGradeForStudent(){

  this.service.GetGradesForStuddent().subscribe((res:any) =>{

    this.GradesBook = res

  })

}


}
