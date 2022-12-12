import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { BookFlightService } from './book-flight.service';
import { Flights } from '../shared/Flight';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService],
})
export class BookFlightComponent implements OnInit {
  errorMessage!: string;
  successMessage!: string;
  flights!: Flights[];
  bookingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookFlightService: BookFlightService
  ) {}

  ngOnInit() {
    //Create the bookingForm FormGroup and get all the flight details
    this.bookFlightService.getAllFlights().subscribe({
      next: (flights) => {
        this.flights = flights;
        console.log(flights);
      },
      error: (error) => console.log(error),
    });
    this.bookingForm = this.fb.group({
      passengerName: ['', Validators.required],
      noOfTickets: [1, [Validators.required, Validators.min(1)]],
      flightId: [
        '',
        [Validators.required, Validators.maxLength(7), validateFlight],
      ],
    });
  }
  book() {
    // Code the method here
  }
}
function validateFlight(c: FormControl) {
  /* 
     Code the validator here
     Use flightError as the property
 */
  var numbersCheck = isNaN(c.value.substr(4, 7));
  var checkHyphenPosition = c.value.slice(3, 4) === '-';
  let checkUpperCasePosition =
    c.value.substr(0, 3).toUpperCase() === c.value.substr(0, 3);
  console.log('is number', numbersCheck);
  console.log('checkUPPercase', checkUpperCasePosition);
  console.log('check Hyphen postioin', checkHyphenPosition);
  var validation =
    numbersCheck === false &&
    checkHyphenPosition === true &&
    checkUpperCasePosition === true;
  return validation
    ? null
    : {
        flightError: {
          message: 'Invalid',
        },
      };
}

function validateEmail(c: FormControl): any {
  let EMAIL_REGEXP =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return EMAIL_REGEXP.test(c.value)
    ? null
    : {
        emailInvalid: {
          message: 'Invalid Format!',
        },
      };
}
