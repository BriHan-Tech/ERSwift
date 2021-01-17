import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  checkInForm: FormGroup;
  patient: any;

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/patients/min-patient/";

  constructor(private fb: FormBuilder, private el: ElementRef, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.checkInForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.maxLength(26)]],
      last_name: ["", [Validators.required, Validators.maxLength(50)]],
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

      if (this.checkInForm.get('reasoning').value == "cut") {
        formData.append('cut_location', this.checkInForm.get('cut_location').value);
      }

      formData.append('extra_information', this.checkInForm.get('extra_information').value)
    
      this.http.post<any>(this.erswiftAPIUrl, formData).subscribe(
        (res) => this.storeResult(res),
        (err) => console.log(err)
      )
    } else {
      this.validateAllFormFields(this.checkInForm);
    }
  }

  storeResult(result:any):void {
    localStorage.setItem("hospital_area", result.hospital_area);
    localStorage.setItem("user_id", result.id);
    localStorage.setItem("triage", "2")

    this.navigateToQueue();

  }

  navigateToQueue():void {
    this.router.navigate(['queue-position'])
  }

  // If the form does not submit, this wsould inform the user on the errors on the form.
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
