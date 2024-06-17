import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotenbuchComponent } from './notenbuch.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotenbuchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NotenbuchModule { }
