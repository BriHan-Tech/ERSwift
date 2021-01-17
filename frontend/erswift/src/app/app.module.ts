import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmergencyCheckInComponent } from './emergency-check-in/emergency-check-in.component';
import { QueuePositionComponent } from './queue-position/queue-position.component';
import { CheckInComponent } from './check-in/check-in.component';
import { BackButtonShellComponent } from './back-button-shell/back-button-shell.component';
import { AuthGuard, AuthInterceptor, AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmergencyCheckInComponent,
    QueuePositionComponent,
    CheckInComponent,
    BackButtonShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
