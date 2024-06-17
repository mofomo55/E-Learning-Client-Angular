import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentMain } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TeacherComponent } from './teacher/teacher.component';
import { CreateAssigmentComponent } from './create-assigment/create-assigment.component';
import { GradingComponent } from './grading/grading.component';
import { StudentComponent } from './student/student.component';
import { SubmissionComponent } from './submission/submission.component';



@NgModule({
  declarations: [
    DashboardComponentMain,
    AdminComponent,
    TeacherComponent,
    CreateAssigmentComponent,
    GradingComponent,
    StudentComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboradMainModule { }
