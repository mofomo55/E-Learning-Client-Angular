import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentAdmin } from './components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponentAdmin
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardAdminModule { }
