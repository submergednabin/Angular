import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidCredentialMsg!: string;
  loginForm!: UntypedFormGroup;
  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private formbuilder: UntypedFormBuilder
  ) {
    this.loginForm = this.formbuilder.group({
      username: [],
      password: [],
    });
  }

  onFormSubmit(): void {
    const uname = this.loginForm.value.username;
    const pwd = this.loginForm.value.password;
    this.loginService.isUserAuthenticated(uname, pwd).subscribe({
      next: (authenticated) => {
        if (authenticated) {
          this.router.navigate(['/books']);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again';
        }
      },
    });
  }
}
