import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { OrderService } from '../services/OrderService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-detail-view',
  templateUrl: './catalog-detail-view.component.html',
  styleUrls: ['./catalog-detail-view.component.css']
})
export class CatalogDetailViewComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<Book>();
  @Input() book: Book;

  public successText: string;
  public errorText: string;

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
  }

  public addBookToOrder() {
    this.errorText = "";
    this.successText = "";
    this.orderService.setBook(this.book)
      .then(_ => this.successText = "Successfully added book")
      .then(_ => this.orderService.getCustomer())
      .then(_ => this.router.navigateByUrl('/catalog-summary'))
      .catch(_ => this.router.navigateByUrl('/customer-details'))
  }

  public deselectBook() {
    this.uploaded.emit(null);
  }
}
