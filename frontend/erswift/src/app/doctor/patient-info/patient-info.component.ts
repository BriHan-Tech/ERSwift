import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { HttpGetService } from 'src/app/services/http-get.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/";

  triage: string;
  patient: any;

  patient_id: number;

  constructor(private route: ActivatedRoute, private router: Router, private httpGetService: HttpGetService, private http: HttpClient,) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.patient_id = +params.get('id');
        this.triage = params.get('triage');
        this.getPatient(this.patient_id);
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

  delete() {
    if (this.triage == "priority") {
      const url: string = this.erswiftAPIUrl + "patients/priority_patient/" + this.patient.id + "/"
      if (confirm("Is the Patient Dismissed?")) {
        this.http.delete(url).subscribe(
          (res) => this.router.navigate(['/doctor/dashboard']),
        )
      }
    } else if (this.triage == "urgent") {
      const url: string = this.erswiftAPIUrl + "patients/patient/" + this.patient.id + "/"
      if (confirm("Is the Patient Dismissed?")) {
        this.http.delete(url).subscribe(
          (res) => this.router.navigate(['/doctor/dashboard']),
        )
      }
    }
  }

  goToDashBoard() {
    
  }

}
