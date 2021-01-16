import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergencyCheckInComponent } from './emergency-check-in/emergency-check-in.component';
import { HomeComponent } from './home/home.component';
import { QueuePositionComponent } from './queue-position/queue-position.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emergency-check-in", component: EmergencyCheckInComponent },
  { path: "queue-position/:id", component: QueuePositionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
