import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  submitted!: boolean;
  constructor(private formBuilder: UntypedFormBuilder, private regService: RegistrationService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required, Validators.email],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: [],
      }),
    });
  }

  register(){
    this.regService.addRegistration(this.registerForm.value);
  }
}
