import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'patients', component: PatientComponent },
  { path: 'nurses', component: NurseComponent },
  { path: 'meetings', component: MeetingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
