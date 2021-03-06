import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  // template: `
  // <h1>Welcome Login</h1>
  // <h2>Course Name:{{ courseName }}</h2>
  // `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidCredentialMsg!: string;
  loginForm!: FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.loginForm = this.formbuilder.group({
      username:[],
      password:[],
    })
  }

  onFormSubmit(): void {
    const uname = this.loginForm.value.username;
    const pwd = this.loginForm.value.password;
    this.loginService.isUserAuthenticated(uname, pwd).subscribe({next:(authenticated)=>{
      if(authenticated){
        alert("login success")
        this.router.navigate(['/book-ride']);
      }else {
        this.invalidCredentialMsg = 'Invalid Credentials. Try again';
      }
    }});
  }
}
