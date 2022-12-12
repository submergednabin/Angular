import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
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
  constructor(private formBuilder: UntypedFormBuilder, private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: (books) => (this.books=books),
      error: (err) => this.errMsg=<any>err
    });
  }

  onClickSubmit(data:any){
    console.log(data)
    if(data.fullname.trim()==="" || data.password.trim()===""){
      console.log("null")
      this.errMsg = "All field required"
    }
  }
}
