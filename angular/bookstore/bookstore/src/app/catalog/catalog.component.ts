import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { CatalogService } from '../services/CatalogService';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public selectedBook: Book;
  public searchText: string;
  public books: Book[];
  public errorText: string;

  constructor(private catalogService: CatalogService) {
    this.searchBook();
  }

  ngOnInit() {
  }
  public selectBook(book: Book) {
    this.selectedBook = book;
    this.searchText = "";
  }

  public searchBook() {
    this.catalogService.searchBooks(this.searchText)
      .then(books => this.books = books)
      .then(_ => this.errorText = "")
      .catch(error => {
        this.errorText = error;
        this.books = []
      });
  }
}
