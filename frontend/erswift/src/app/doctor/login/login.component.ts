import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: any;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  save() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get("username").value, this.loginForm.get("password").value).subscribe(
        success => this.router.navigate(['']),
        error => this.error = error
      )
    }
  }

}
