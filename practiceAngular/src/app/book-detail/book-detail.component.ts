import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!:Book;
  error!:any;
  constructor(private bookService:BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      this.bookService.getBook(params.get('id')).subscribe((book)=> {
        this.book=book ?? this.book;
      });
    });
  }

  goBack(){
    window.history.back();
  }

}
