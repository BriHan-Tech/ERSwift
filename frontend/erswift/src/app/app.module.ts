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
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';
import { BadRequestComponent } from './error-pages/bad-request/bad-request.component';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmergencyCheckInComponent,
    QueuePositionComponent,
    CheckInComponent,
    BackButtonShellComponent,
    NotFoundComponent,
    ServerErrorComponent,
    BadRequestComponent,
    ForbiddenComponent
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
