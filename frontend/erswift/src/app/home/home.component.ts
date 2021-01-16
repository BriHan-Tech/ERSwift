import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user_id: number;

  constructor() { }

  ngOnInit(): void {
    this.user_id = +localStorage.getItem("user_id")
  }

}
