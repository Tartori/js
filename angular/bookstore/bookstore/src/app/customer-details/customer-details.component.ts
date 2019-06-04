import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/OrderService';
import { Customer, CreditCardType } from '../shared/customer';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public errorText: string;
  public successText: string;
  public model: Customer = new Customer();
  public submitted: boolean = false;
  public types: string[] = Object.keys(CreditCardType);
  public curYear: number = 2019;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.errorText = "";
    this.orderService.setCustomer(this.model)
      .then(_ => this.successText = "")
      .then(_ => this.orderService.getBook())
      .then(_ => this.router.navigateByUrl('/catalog-summary'))
      .catch(_ => this.router.navigateByUrl('/catalog'))
  }
}
