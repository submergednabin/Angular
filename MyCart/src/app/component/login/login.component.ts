import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  // template: `
  // <h1>Welcome Login</h1>
  // <h2>Course Name:{{ courseName }}</h2>
  // `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  courseName: string = 'Angular';
  username:string = ""
  password:any=""

  
  constructor() {}

  ngOnInit() {}
}
