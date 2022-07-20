import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  title = 'Demo on HttpClientModule';
  books!: Book[];
  errorMessage!: string;
  ADD_BOOK!: boolean;
  UPDATE_BOOK!: boolean;
  DELETE_BOOK!: boolean;
  constructor(private bookService: BookService) {}

  getBooks() {
    this.bookService.getBooks().subscribe({
      next: (books) => (this.books = books),
      error: (error) => (this.errorMessage = <any>error),
    });
  }

  addBook(bookId: string, name: string): void {
    let id = parseInt(bookId);
    this.bookService
      .addBook({ id, name })
      .subscribe({ next: (book: any) => this.books.push(book) });
  }

  updateBook(bookId: string, name: string): void {
    let id = parseInt(bookId);
    this.bookService
      .updateBook({ id, name })
      .subscribe({ next: (book: any) => (this.books = book) });
  }

  deleteBook(bookId: string): void {
    let id = parseInt(bookId);
    this.bookService
      .deleteBook(id)
      .subscribe({ next: (book: any) => (this.books = book) });
  }
  ngOnInit(): void {
    this.getBooks();
  }
}
