import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:any = "my cart "
  courseName: string = "Angular";

  constructor(){}

  ngOnInit() {
      
  }
}
