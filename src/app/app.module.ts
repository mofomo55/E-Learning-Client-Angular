import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponentAdmin } from './dashboard-admin/components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule} from '@angular/common';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboradMainModule } from './dashborad-main/dashborad-main.module';
import { CreateAssigmentModule } from './dashborad-main/create-assigment/create-assigment.module';
import { GradingModule } from './dashborad-main/grading/grading.module';
import { SubmissionModule } from './dashborad-main/submission/submission.module';
import { NotenbuchModule } from './dashborad-main/notenbuch/notenbuch.module';
import { UserAuthModule } from './user-auth/user-auth.module';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NavbarModule,
    DashboardAdminModule,
    ReactiveFormsModule,
    DashboardAdminModule,
    DashboradMainModule,
    CreateAssigmentModule,
    GradingModule,
    SubmissionModule,
    NotenbuchModule,
    UserAuthModule
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
