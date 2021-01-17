import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpGetService } from 'src/app/services/http-get.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  triage: string;
  patient: any;

  constructor(private route: ActivatedRoute, private httpGetService: HttpGetService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.triage = params.get('triage');
        this.getPatient(id);
      }
    )
  }

  getPatient(id:number):void {
    if (this.triage == "priority") {
      this.httpGetService.getPatientFromPriority(id).subscribe(
        patient => {
          this.patient = patient;
          console.log(this.patient)
        }
      )
    } else if (this.triage == "urgent") {
      this.httpGetService.getPatientFromNormal(id).subscribe(
        patient => {
          this.patient = patient;
        }
      )
    }
  }

}
