import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { HttpGetService } from '../services/http-get.service';

@Component({
  selector: 'app-queue-position',
  templateUrl: './queue-position.component.html',
  styleUrls: ['./queue-position.component.scss']
})
export class QueuePositionComponent implements OnInit {

  constructor(private httpGetService: HttpGetService) { 
    interval(3000).subscribe(x => {
      this.getQueue(this.hospital_area_id);
    })
  }

  hospital_area_id:number;
  user_id: string;

  hospitalArea: any;

  ngOnInit(): void {
    this.hospital_area_id = +localStorage.getItem("hospital_area");
    this.user_id = localStorage.getItem("user_id");
    this.getQueue(this.hospital_area_id);
  }

  getQueue(id:number):void {
    this.httpGetService.getPriorityQueue(id).subscribe(
      hospital_area => {
        this.hospitalArea = hospital_area;
      }
    )
  }

  queueNumber():number {
    const queueList = this.hospitalArea.priority_patients;
    for (let i=0; i < queueList.length; i ++) {
      if (this.user_id == queueList[i].id) {
        return i+1
      }
    }
  }

}
