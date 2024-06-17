import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradingComponent } from '../grading/grading.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GradingModule { }
