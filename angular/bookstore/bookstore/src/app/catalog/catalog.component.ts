import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BOOK_DATA } from '../shared/book-data';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public selectedBook: Book;
  public books: Book[];
  constructor() {
    this.books = BOOK_DATA;
  }

  ngOnInit() {
  }
  public selectBook(book: Book) {
    this.selectedBook = book;
  }
}
