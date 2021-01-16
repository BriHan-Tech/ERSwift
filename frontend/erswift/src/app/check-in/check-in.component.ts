import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  checkInForm: FormGroup;
  patient: any;

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/patient/";

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.checkInForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      date_of_birth: ["", [Validators.required]],

      reasoning: ["", [Validators.required]],
      cut_location: [""],
      extra_information: [""]
    })

    this.checkInForm.get('reasoning').valueChanges.subscribe(
      value => this.setCutValidators(value)
    );
  }

  setCutValidators(reason: string): void {
    const cut_location = this.checkInForm.get("cut_location");

    if (reason == "cut") {
      cut_location.setValidators(Validators.required);
    } else {
      cut_location.clearValidators();
    }

    cut_location.updateValueAndValidity();
  }

  save(): void {
    if (this.checkInForm.valid) {
      const formData = new FormData();
      
      formData.append('first_name', this.checkInForm.get('first_name').value);
      formData.append('last_name', this.checkInForm.get('last_name').value);
      formData.append('date_of_birth', this.checkInForm.get('date_of_birth').value);
      formData.append('reasoning', this.checkInForm.get('reasoning').value);
      formData.append('cut_location', this.checkInForm.get('cut_location').value);
      formData.append('extra_information', this.checkInForm.get('extra_information').value)
    
      this.http.post<any>(this.erswiftAPIUrl, formData).subscribe(
        (res) => this.storeResult(res),
        (err) => console.log(err)
      )
    } else {
      console.log("Not Valid")
    }
  }

  storeResult(result:any):void {
    localStorage.setItem("hospital_area", result.hospital_area);
    localStorage.setItem("user_id", result.id);
    localStorage.setItem("triage", "2")
  }

}
