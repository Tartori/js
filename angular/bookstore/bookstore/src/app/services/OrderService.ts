import { Book } from '../shared/book';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OrderService {
    private book: Book = null;
    private customer: Customer = null;
    private url: string = '/api/orders';
    constructor(private httpClient: HttpClient) { }

    public setBook(book: Book): Promise<Book> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.book = book;
                resolve(this.book);
            }, 125);
        });
    }

    public setCustomer(customer: Customer): Promise<Customer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.customer = customer)
            }, 125);
        });
    }

    public getBook(): Promise<Book> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.book != undefined && this.book != null) {
                    console.log(this.book)
                    resolve(this.book);
                }
                else {
                    console.log("no book")
                    reject("No book set")
                }
            }, 125);
        });
    }

    public getCustomer(): Promise<Customer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.customer != undefined && this.customer != null) {
                    console.log(this.customer)
                    resolve(this.customer);
                }
                else {
                    console.log("no customer")
                    reject("No customer set")
                }
            }, 125);
        });
    }

    public submit(): Promise<number> {
        let options = {
            params: new HttpParams().set('isbn', this.book.isbn),
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };
        return this.httpClient.post<number>(this.url, this.customer, options).toPromise()
            .then(number => {
                console.log(number + ' order successfully transmitted');
                return number;
            })
            .catch((response: HttpErrorResponse) => {
                throw response.statusText + ': ' + response.error.message;
            });
    }


    _filter(field: string, keywords: string[]) {
        return keywords.some(keyword => field.includes(keyword));
    }
}