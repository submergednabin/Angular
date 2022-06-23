import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css'],
})
export class BookRideComponentComponent implements OnInit {
  showAll: boolean = false;
  riders: any[] = [
    {
      id: 1,
      name: 'TypeScript',
      car: 'Toyota',
      pickUp: 'Lex',
      destination: 'Amazon',
      seatsLeft: 4
    },
    {
      id: 2,
      name: 'Angular',
      car: 'Ford',
      pickUp: 'Louisville',
      destination: 'Google',
      seatsLeft: 4
    },
    {
      id: 3,
      name: 'Node JS',
      car: 'Mazda',
      pickUp: 'Lex',
      destination: 'Vegas',
      seatsLeft: 3
    },
    {
      id: 4,
      name: 'TypeScript',
      car: 'Honda',
      pickUp: 'Lex',
      destination: 'Texas',
      seatsLeft: 1
    },
  ];
  constructor() {}
  showAllRide() {
    this.showAll = true;
    console.log(this.riders);
    return this.riders;
  }
  ngOnInit(): void {}
}
