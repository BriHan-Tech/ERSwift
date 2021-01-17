import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackButtonShellComponent } from './back-button-shell/back-button-shell.component';
import { CheckInComponent } from './check-in/check-in.component';
import { EmergencyCheckInComponent } from './emergency-check-in/emergency-check-in.component';
import { HomeComponent } from './home/home.component';
import { QueuePositionComponent } from './queue-position/queue-position.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { 
    path: "",
    component: BackButtonShellComponent,
    children: [
      { path: "emergency-check-in", component: EmergencyCheckInComponent },
      { path: "check-in", component: CheckInComponent },
      { path: "queue-position", component: QueuePositionComponent },
    ]
  },
  {
    path: "doctor",
    loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
