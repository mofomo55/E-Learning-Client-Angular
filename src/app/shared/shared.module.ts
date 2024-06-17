import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './componentes/nav/nav.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NewUserModelFormComponent } from './componentes/new-user-model-form/new-user-model-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    NewUserModelFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
  ],exports:[
    NavComponent,
    NewUserModelFormComponent
  ]
})
export class SharedModule { }
