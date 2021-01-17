import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../services/auth.service';
import { BackButtonShellComponent } from './back-button-shell/back-button-shell.component';


@NgModule({
  declarations: [DashboardComponent, PatientInfoComponent, LoginComponent, BackButtonShellComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackButtonShellComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'patient-info/:id', component: PatientInfoComponent, canActivate: [AuthGuard] },
        ]
      }

    ])
  ],
})
export class DoctorModule { }
