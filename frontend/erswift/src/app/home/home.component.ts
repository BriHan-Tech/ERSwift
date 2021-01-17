import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user_id: number;
  username: string;

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    this.user_id = +localStorage.getItem("user_id");
    this.username = localStorage.getItem("username");
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
