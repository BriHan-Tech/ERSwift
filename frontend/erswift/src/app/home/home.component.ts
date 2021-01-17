import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpGetService } from '../services/http-get.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user_id: number;
  triage: number;
  username: string;

  constructor(private authService: AuthService, private httpGetService: HttpGetService ) { }

  ngOnInit(): void {
    this.user_id = +localStorage.getItem("user_id");
    this.triage = +localStorage.getItem("triage");

    this.username = localStorage.getItem("username");

    this.checkUser();
  }

  checkUser():void {
    // If Patient is Dismissed, we Remove the user_id
    if (this.user_id) {
      if (this.triage == 1) {
        this.httpGetService.verifyPriorityPatient(this.user_id).subscribe();
      } else {
        this.httpGetService.verifyPatientList(this.user_id).subscribe();
      }
    }
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
