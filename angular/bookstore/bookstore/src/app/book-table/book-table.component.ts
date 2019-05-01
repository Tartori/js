import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  @Output()
  uploaded = new EventEmitter<Book>();

  @Input() books: Book[];


  constructor() { }

  ngOnInit() {
  }

  public selectBook(book: Book) {
    this.uploaded.emit(book);
  }
}
