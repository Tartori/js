import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-catalog-detail-view',
  templateUrl: './catalog-detail-view.component.html',
  styleUrls: ['./catalog-detail-view.component.css']
})
export class CatalogDetailViewComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<Book>();

  @Input() book: Book;


  constructor() { }

  ngOnInit() {
  }

  public selectBook() {
    this.uploaded.emit(null);
  }
}
