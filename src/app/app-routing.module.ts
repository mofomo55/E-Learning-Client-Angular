import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentMain } from './dashborad-main/dashboard/dashboard.component';
import { DashboardComponentAdmin } from './dashboard-admin/components/dashboard/dashboard.component';

import { LibraryComponent } from './users/components/library/library.component';
import { MessagesComponent } from './users/components/messages/messages.component';
import { ProfileComponent } from './users/components/profile/profile.component';
import { CreateAssigmentComponent } from './dashborad-main/create-assigment/create-assigment.component';
import { GradingComponent } from './dashborad-main/grading/grading.component';
import { SubmissionComponent } from './dashborad-main/submission/submission.component';
import { NotenbuchComponent } from './dashborad-main/notenbuch/notenbuch.component';
import { LoginComponent } from './user-auth/components/login/login.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
{path:"Dashboard", component:DashboardComponentMain,canActivate: [AuthGuard]},
{path:"Dashboard/CreateAssigment", component:CreateAssigmentComponent,canActivate: [AuthGuard]},
{path:"Dashboard/submission", component:SubmissionComponent,canActivate: [AuthGuard]},
{path:"Dashboard/Notenbuch", component:NotenbuchComponent,canActivate: [AuthGuard]},
{path:"Dashboard/Grading", component:GradingComponent,canActivate: [AuthGuard]},
{path:"Profile", component:ProfileComponent,canActivate: [AuthGuard]},
{path:"login", component:LoginComponent },
{path:"Library", component:LibraryComponent,canActivate: [AuthGuard]},
{path:"Messages", component:MessagesComponent,canActivate: [AuthGuard]},

{path:"**", redirectTo:"login",pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
