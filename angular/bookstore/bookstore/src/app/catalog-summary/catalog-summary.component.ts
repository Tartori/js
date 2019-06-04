import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/OrderService';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-catalog-summary',
  templateUrl: './catalog-summary.component.html',
  styleUrls: ['./catalog-summary.component.css']
})
export class CatalogSummaryComponent implements OnInit {

  public errorText: string = "";
  public successText: string = "";
  public customer: Customer = new Customer();
  public book: Book = null;
  constructor(private orderService: OrderService, private router: Router) {
    orderService.getBook().then(book => this.book = book).catch(e => this.errorText += e)
    orderService.getCustomer().then(customer => this.customer = customer).catch(e => this.errorText += e)
  }

  ngOnInit() {
  }

  public back() {
    this.router.navigateByUrl('/catalog')
  }

  public submitOrder() {
    this.errorText = "";
    this.orderService.submit()
      .then(orderNumber => this.successText = "Order Successfully transmitted. Number: " + orderNumber)
      .catch(e => this.errorText += e)
  }
}
