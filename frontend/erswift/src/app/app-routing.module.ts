import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackButtonShellComponent } from './back-button-shell/back-button-shell.component';
import { CheckInComponent } from './check-in/check-in.component';
import { EmergencyCheckInComponent } from './emergency-check-in/emergency-check-in.component';
import { BadRequestComponent } from './error-pages/bad-request/bad-request.component';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
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
  },
  { path: "404", component: NotFoundComponent},
  { path: "500", component: ServerErrorComponent },
  { path: "400", component: BadRequestComponent },
  { path: "403", component: ForbiddenComponent },
  { path: "**", redirectTo:"404", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
