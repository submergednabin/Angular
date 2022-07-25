import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books:Book[] = [];

  constructor(private router:Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({next:books => this.books = books.slice(1,5)})
  }
  gotoDetail(book:Book):void{
    this.router.navigate(['/detail', book.id]);
  }
}
