import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorDirectiveDirective } from './directives/color-directive.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practiceAngular';
  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  show:boolean=false;

  @ViewChild(ColorDirectiveDirective) colorDirective!: ColorDirectiveDirective;

  modifyColor(color: string) {
    this.colorDirective.modify(color);
  }

  fetchData(): void {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(11);
      }, 1000),
        setTimeout(() => {
          observer.next(22);
        }, 2000),
        setTimeout(() => {
          observer.complete();
        }, 3000);
    });
    this.data.subscribe(
      (value) => this.myArray.push(value),
      (error) => (this.errors = true),
      () => (this.finished = true)
    );
  }
}
