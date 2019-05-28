import { Book } from '../shared/book';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';

@Injectable()
export class OrderService {
    private books: Book[] = [];
    private customer: Customer;
    public addBook(book: Book): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.books.includes(book)) {
                    reject('book already in order service');
                }
                else {
                    this.books.push(book);
                    resolve(this.books);
                }
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



    _filter(field: string, keywords: string[]) {
        return keywords.some(keyword => field.includes(keyword));
    }
}