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
  triage: number;

  hospitalArea: any;

  ngOnInit(): void {
    this.hospital_area_id = +localStorage.getItem("hospital_area");
    this.user_id = localStorage.getItem("user_id");
    this.triage = +localStorage.getItem("triage");
    this.getQueue(this.hospital_area_id);
  }

  getQueue(id:number):void {
    if (this.triage == 1) {
      this.httpGetService.getPriorityQueue(id).subscribe(
        hospital_area => {
          this.hospitalArea = hospital_area;
        }
      )
    } else {
      this.httpGetService.getPatientQueue(id).subscribe(
        hospital_area => {
          this.hospitalArea = hospital_area;
        }
      )
    }
  }

  queueNumber():number {
    let queueList = this.hospitalArea.priority_patients;

    if (this.triage == 1) {
      queueList = this.hospitalArea.priority_patients;
    } else {
      queueList = this.hospitalArea.patients;
    }

    for (let i=0; i < queueList.length; i ++) {
      if (this.user_id == queueList[i].id) {
        return i+1
      }
    }
  }

}
