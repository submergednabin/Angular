import { Component, NgModuleRef, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../../book/book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  bookDetail !:any;

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

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

  openModal() {
    const modalRef = this.modalService.open(' ');
    console.log('ng: ' + modalRef);
  }

  bookDetails(id:number){
    this.bookService.getBook(id).subscribe({
      next:(book) => {this.bookDetail=book}
    });
  }
}
