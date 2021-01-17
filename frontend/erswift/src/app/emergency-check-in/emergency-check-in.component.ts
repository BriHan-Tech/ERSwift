import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-emergency-check-in',
  templateUrl: './emergency-check-in.component.html',
  styleUrls: ['./emergency-check-in.component.scss']
})
export class EmergencyCheckInComponent implements OnInit {

  emergencyCheckInForm: FormGroup;
  patient: any;

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/priority_patient/";

  constructor(private fb: FormBuilder, private el: ElementRef, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.emergencyCheckInForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.maxLength(26)]],
      last_name: ["", [Validators.required, Validators.maxLength(50)]],
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
        (res) => this.storeResult(res),
        (err) => console.log(err)
      )
    } else {
      this.validateAllFormFields(this.emergencyCheckInForm);
    }
  }

  storeResult(result:any):void {
    localStorage.setItem("hospital_area", result.hospital_area);
    localStorage.setItem("user_id", result.id);
    localStorage.setItem("triage", "1")

    this.navigateToQueue();

  }

  navigateToQueue():void {
    this.router.navigate(['queue-position'])
  }

    // If the form does not submit, this would inform the user on the errors on the form.
    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
  
      setTimeout(() => this.scrollIfFormHasErrors(formGroup).then(() => {}), 25)
    }
  
  
    scrollTo(el: Element) {
      if(el) { 
          el.scrollIntoView({ behavior: 'smooth', block: 'center'});
      }
    }
    
    scrollToError(): void {
      const firstElementWithError = this.el.nativeElement.querySelector('.is-invalid');
      this.scrollTo(firstElementWithError);
    }
    
    async scrollIfFormHasErrors(form: FormGroup): Promise <any> {
      await form.invalid;
      this.scrollToError();
    }  
}
