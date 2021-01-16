import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientInfoComponent } from './patient-info/patient-info.component';


@NgModule({
  declarations: [DashboardComponent, PatientInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient-info/:id', component: PatientInfoComponent }
    ])
  ],
})
export class DoctorModule { }
