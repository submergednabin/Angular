import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book/book';

@Component({
  selector: 'app-custom-forms',
  templateUrl: './custom-forms.component.html',
  styleUrls: ['./custom-forms.component.css'],
})
export class CustomFormsComponent implements OnInit {
  books: Book[] = [];
  successMessage!: string;
  errMsg!: string;
  selectedBook !:string;
  constructor(private formBuilder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: (books) => (this.books=books),
      error: (err) => this.errMsg=<any>err
    });
  }
}
