import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@NgModule({
  imports: [CommonModule, BookRoutingModule],
  declarations: [BookComponent,DashboardComponent, BookDetailComponent],
})
export class BookModule {}
