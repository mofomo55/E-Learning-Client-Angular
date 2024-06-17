import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LibraryComponent } from './components/library/library.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MessagesComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
