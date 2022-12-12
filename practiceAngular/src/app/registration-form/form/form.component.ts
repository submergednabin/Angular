import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  submitted!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: [],
      }),
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
    });
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   lastName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    //   email: new FormControl('', [Validators.required, Validators.email, this.validateEmail])
    // });
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  validateEmail(c: UntypedFormControl) {
    let Email_REGEXP =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return Email_REGEXP.test(c.value)
      ? null
      : {
          emailInvalid: {
            message: 'Invalid Format!',
          },
        };
  }

  register() {}
}
