import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergency-check-in',
  templateUrl: './emergency-check-in.component.html',
  styleUrls: ['./emergency-check-in.component.scss']
})
export class EmergencyCheckInComponent implements OnInit {

  emergencyCheckInForm: FormGroup;
  patient: any;

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/priority_patient/";

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.emergencyCheckInForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      date_of_birth: ["", [Validators.required]],

      emer_reasoning: ["", [Validators.required]],
      extra_information: [""]
    })
  }

  save(): void {
    if (this.emergencyCheckInForm.valid) {
      const formData = new FormData();
      
      formData.append('first_name', this.emergencyCheckInForm.get('first_name').value);
      formData.append('last_name', this.emergencyCheckInForm.get('last_name').value);
      formData.append('date_of_birth', this.emergencyCheckInForm.get('date_of_birth').value);
      formData.append('emer_reasoning', this.emergencyCheckInForm.get('emer_reasoning').value);
      formData.append('extra_information', this.emergencyCheckInForm.get('extra_information').value)
    
      this.http.post<any>(this.erswiftAPIUrl, formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      )
    } else {
      console.log("Not Valid")
    }
  }

}
