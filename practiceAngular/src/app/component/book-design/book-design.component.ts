import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../../book/book';


@Component({
  selector: 'app-book-design',
  templateUrl: './book-design.component.html',
  styleUrls: ['./book-design.component.css'],
})
export class BookDesignComponent implements OnInit {
  books!: Book[];
  errorMessage!: string;
  successMessage!: string;
  selectedBook!: string;
  selectedBooks !:string;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        console.log(books);
      },
      error: (error) => {
        this.errorMessage = <any>error;
      },
    });
  }

  getBook() {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        console.log(books);
      },
      error: (error) => {
        this.errorMessage = <any>error;
      },
    });
  }
}
